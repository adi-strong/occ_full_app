import { useState } from "react";
import { Navigate, Route } from "react-router-dom";
import { CustomRoutes } from "react-admin";
import {
  fetchHydra as baseFetchHydra,
  HydraAdmin,
  hydraDataProvider as baseHydraDataProvider, ResourceGuesser,
  useIntrospection,
} from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";
import {authProvider, ENTRYPOINT} from "../../utils/utils";
import ContinentsList from "../../features/continentsList";
import PostContinent from "../../features/postContinent";

const getHeaders = () => localStorage.getItem("token") ? {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
} : {};
const fetchHydra = (url, options = {}) =>
  baseFetchHydra(url, {
    ...options,
    headers: getHeaders,
  });
const RedirectToLogin = () => {
  const introspect = useIntrospection();
  
  if (localStorage.getItem("token")) {
    introspect();
    return <></>;
  }
  return <Navigate to="/login" />;
};
const apiDocumentationParser = (setRedirectToLogin) => async () => {
  try {
    setRedirectToLogin(false);
    
    return await parseHydraDocumentation(ENTRYPOINT, { headers: getHeaders });
  } catch (result) {
    const { api, response, status } = result;
    if (status !== 401 || !response) {
      throw result;
    }
    
    // Prevent infinite loop if the token is expired
    localStorage.removeItem("token");
    
    setRedirectToLogin(true);
    
    return {
      api,
      response,
      status,
    };
  }
};
const dataProvider = (setRedirectToLogin) => baseHydraDataProvider({
  entrypoint: ENTRYPOINT,
  httpClient: fetchHydra,
  apiDocumentationParser: apiDocumentationParser(setRedirectToLogin),
  mercure: true,
  useEmbedded: false,
});

const Admin = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  
  return (
    <HydraAdmin
      entrypoint={window.origin}
      dataProvider={dataProvider(setRedirectToLogin)}
      authProvider={authProvider}>
      {redirectToLogin ? (
        <CustomRoutes>
          <Route path="/" element={<RedirectToLogin />} />
          <Route path="/:any" element={<RedirectToLogin />} />
        </CustomRoutes>
      ) : (
        <>
          <ResourceGuesser
            name='api/continents'
            list={ContinentsList}
            create={PostContinent}
            options={{ label: 'Continents' }} />
        </>
      )}
    </HydraAdmin>
  )
}

export default Admin

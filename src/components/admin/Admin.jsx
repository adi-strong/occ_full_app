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
import ContinentsList from "../../features/continents/continentsList";
import PostContinent from "../../features/continents/postContinent";
import EditContinent from "../../features/continents/editContinent";
import ShowContinent from "../../features/continents/showContinent";
import CountriesList from "../../features/countries/countriesList";
import PostCountry from "../../features/countries/postCountry";
import EditCountry from "../../features/countries/editCountry";
import ShowCountry from "../../features/countries/showCountry";
import PostCity from "../../features/cities/postCity";
import CitiesList from "../../features/cities/citiesList";
import ShowCity from "../../features/cities/showCity";
import EditCity from "../../features/cities/editCity";
import PortsList from "../../features/ports/portsList";
import PostPort from "../../features/ports/postPort";
import ShowPort from "../../features/ports/showPort";
import EditPort from "../../features/ports/editPort";

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
            edit={EditContinent}
            show={ShowContinent}
            options={{ label: 'Continents' }} />
          
          <ResourceGuesser
            name='api/countries'
            list={CountriesList}
            create={PostCountry}
            show={ShowCountry}
            edit={EditCountry}
            options={{ label: 'Pays' }} />
          
          <ResourceGuesser
            name='api/cities'
            list={CitiesList}
            create={PostCity}
            show={ShowCity}
            edit={EditCity}
            options={{ label: 'Villes' }} />
          
          <ResourceGuesser
            name='api/ports'
            list={PortsList}
            create={PostPort}
            show={ShowPort}
            edit={EditPort}
            options={{ label: 'Ports' }} />
        </>
      )}
    </HydraAdmin>
  )
}

export default Admin

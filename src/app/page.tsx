import CBCResources from "./Resources";
import Teachers from "./Teachers";
import Teaser from "./Teaser";
import FileUpload from "./Upload";
import ModuleInterface from "./Module";
import Progress from "./Progress";
import GradesPerModule from "./GradesPerModule;";
import Teachergrades from "./Teachergrades";
import UserList from "./UserList";


export default function Home() {
  return (
  <main>
  <Teaser/>
  <Teachers/>
  <CBCResources/>
  <FileUpload/>
  <ModuleInterface/>
  <Progress/>
  <GradesPerModule/>
  <Teachergrades/>
  <UserList/>
  </main>

  );
}




  








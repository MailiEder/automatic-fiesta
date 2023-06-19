import Tabs from "@/components/Tabs";


const fetchErgebnisse = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/single",{
  cache:"no-store"
  });   
return ergebnisseResponse.json();
}

const fetchMenErgebnisse = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/singlemen",{
  cache:"no-store"
  });  
   return ergebnisseResponse.json();
}

const fetchTeamPostswomen = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/teamwoman",{
  cache:"no-store"
  });  
   return ergebnisseResponse.json(); 
  }

  const fetchTeamPosts = async () =>  {
    const ergebnisseResponse = await fetch("http://localhost:3000/api/team",{
    cache:"no-store"
    });
     return ergebnisseResponse.json();
    }

export default async function Page() {

const ergebnisse = await fetchErgebnisse();
const menergebnisse = await fetchMenErgebnisse();
const teamergebnissewomen = await fetchTeamPostswomen();
const teamergebnisse = await fetchTeamPosts();



  return (
    
      <div className="container" >

        <h1 className="text-center mt-3" style={{color: "#228B22",  background:"#F0FFF0", fontWeight: "bold"}}>Ortenaumeisterschaft 2023</h1>
        <h3 className="text-center mt-3" style={{color: "#228B22",  background:"#F0FFF0"}}>Ortenaumeisterschaft 2023</h3>
        <Tabs  
          ergebnisse={ergebnisse}
          menergebnisse={menergebnisse}
          teamergebnissewomen={teamergebnissewomen}
          teamergebnisse={teamergebnisse}
          /> 
    
      </div>    
  

  );

}


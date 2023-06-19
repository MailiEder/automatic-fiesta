import  pgutils  from '../../../utils/pgutils';

export async function GET()  {
                 
const allresults = await pgutils.getAllMenResults();

return new Response(JSON.stringify(allresults)
         ,{status: 200});
   
};
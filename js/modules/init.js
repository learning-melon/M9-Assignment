let arrEmployees = []

async function fetchEmployees(){
    try{
        const response = await fetch('../data/employees.json')
        if(!response.ok)
            throw new Error("Error in response")
        const data = await response.json()
        return data
    }catch(err){
        console.log("Error fetching file: ", err)
        throw err
    }
}

export default fetchEmployees
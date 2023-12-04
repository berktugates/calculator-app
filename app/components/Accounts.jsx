import Link from "next/link"

const Accounts = () => {
  return (
    <>
    <Link className="border border-gray-700 p-2 rounded-lg me-2 hover:bg-gray-700 hover:text-white" target="_blank" href={{
        pathname : "https://github.com/berktugates"
        
    }}>
        GitHub
    </Link>
    <Link className="border border-blue-700 p-2 rounded-lg hover:bg-blue-700 hover:text-white" target="_blank" href={{
        pathname : "https://www.linkedin.com/in/berktugates"
        
    }}>
        LinkedIn
    </Link>
    </>
  )
}

export default Accounts
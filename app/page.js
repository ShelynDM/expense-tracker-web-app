import Link from "next/link";

export default function Page() {
  return (
    <main className='m-4 bg-black'>
      <div className="flex-1">
          <header className= ' p-2 border-b-2 w-auto mb-2'>
              <h1>Header</h1>
          </header>
          <div>
              <div className="m-4 border-cyan-300 border-2">
                  <h1 className="text-center m-2 text-4xl">Welcome to Expense Tracker</h1>
              </div>
              <div className="ml-auto mr-auto mt-72 mb-72 text-center border-2 w-40 ">
                <Link href = "components" className=" text-4xl">Start</Link>
              </div>
          </div>
          <div className="border-t-2 w-auto p-2 mt-2">
              <p className="text-center">All Rights Reserved 2024</p>
          </div>
      </div>
    </main>
  );
}
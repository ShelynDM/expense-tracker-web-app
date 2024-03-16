"use client";
export default function Page() {
    return (
        <main className='m-4 bg-black'>
        <div>
            <header className= ' p-2 border-b-2 w-auto mb-2'>
                <h1>Header</h1>
            </header>
            <div>
                <div className="m-4 border-cyan-300 border-2">
                    <h1 className="text-center m-2 text-4xl">Welcome to Expense Tracker</h1>
                </div>
                <div className="mt-60 mb-60 ml-auto mr-auto border-cyan-300 border-2 w-72 h-72 text-center">
                    <div>
                    <p >Login to start tracking your expenses.</p>
                        <button className="border-2 m-2 border-cyan-300">Google</button>
                        <button className="border-2 m-2 border-cyan-300">GitHub</button>
                    </div>
                </div>
            </div>
            <footer className="border-t-2 w-auto p-2 mt-2">
                <p className="text-center">All Rights Reserved 2024</p>
            </footer>
        </div>
    </main>
    );
}
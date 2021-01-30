import Head from 'next/head'

function roman2decimal(roman) {
  let decimalConverted = 0;

  const romans ={
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  for(let index = 0; index < roman.length; index++){
      let actualValue = roman[index];
      let nextValue = roman[index+1];
      if(romans[nextValue] && nextValue > romans[actualValue]){
        decimalConverted -= romans[actualValue];
      }else{
        decimalConverted += romans[actualValue];
      }
  }

  return decimalConverted;
}

const getInput = () => {
    let romanByUser = (document.getElementById("romanByUser") as HTMLInputElement).value;
    if(isNaN(roman2decimal(romanByUser.toUpperCase()))){
      let htmlVariable : string = "Please, insert a valid Roman Number 😕";
      document.getElementById("result").innerHTML = htmlVariable;
    }
    else{
      let htmlVariable : string = "The result is: " + roman2decimal(romanByUser.toUpperCase()) + " in decimal 🤩";
      document.getElementById("result").innerHTML = htmlVariable;
    }
  }

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Roman to Decimal</title>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className='max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  <h1 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">Hi! Let's Convert Your Roman Number?</h1>
                  <p className="text-gray-500 text-base">With this simple converter you can know witch roman number corresponds to a decimal number. 😀</p>
                </div>
                <div className="bg-gray-100 rounded-lg">
                  <div className="py-4 px-4">
                    <div className="flex flex-col">
                      <h4 className="text-lg text-center font-semibold mb-3">You Just Need to Type!</h4>
                      <input type="text" id="romanByUser" className="border-gray-500 text-center mt-2 text-lg lowercase" onKeyUp={getInput} autoFocus placeholder="Type a Roman Number 😋"/>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <label className="block tracking-widest uppercase text-center text-lg shadow border-indigo-600 focus:shadow-outline focus:outline-none text-indigo-600  py-3 px-10 rounded" id="result"></label>
                </div>
              </div>
            </div>
          </div>
      </main>

      <footer className="flex items-center justify-center w-full h-12 border-t">
          Built with <p title="Love">❤</p> by <a href="https://github.com/ChristopherMarques" target="_blank" className="text-indigo-600">Christopher Corrêa</a>
      </footer>
    </div>
  )
}

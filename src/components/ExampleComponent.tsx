const ExampleComponent = () => {
  // check Vowel

  const isVowel = (ch: string): boolean => {
    return (
      ch === "a" ||
      ch === "e" ||
      ch === "i" ||
      ch === "o" ||
      ch === "u" ||
      ch === "A" ||
      ch === "E" ||
      ch === "I" ||
      ch === "O" ||
      ch === "U"
    );
  };
  // count Vowel
  const countVowel = (name: string): number => {
    let count = 0;

    // const checkName = name.toLowerCase()
    for (let i = 0; i <= name.length; i++) {
      if (isVowel(name[i])) {
        count++;
      }
    }
    console.log(count);
    return count;
  };

  // Triangle Pattren
  const trianglePattren1 = (n: number): void => {
    for(let i = 1; i<=n ; i++){
        console.log("* ".repeat(i));
    }
    
  };

  const trianglePattren2 = (n: number): void => {

     for(let i = n; i>0 ; i--){
        console.log("* ".repeat(i));
    }
    
  };

  const averageOfTwo = (x:number, y:number):number =>{
    return (x+y)/2
  }

   const averageOfThree = (a:number, b:number, c:number):number =>{
    return (a+b+c)/3
  }

  const averageOfFour = (a:number, b:number, c:number, d:number):number =>{
    return (a+b+c+d)/4
  }



  const countNumber = (x:number,...n:number[]):number =>{
    let count = 0
    for(let i = 0; i<n.length ;i++){
        if(n[i] === x)
            count++
    }
    console.log(count)
    return count
 
  }

  const doesExist = (x:number,n:number[]):boolean =>{
    for(let i = 0; i < n.length ;i++){
        if(n[i] === x)
            return true
    }
    return false
  }






  return (
    <>
    <div className="text-2xl">Average of Two Numbers:{averageOfTwo(4,5)}</div>
    <div className="text-2xl">Average of Two Numbers:{averageOfThree(4,5,8)}</div>
    <div className="text-2xl">Average of Two Numbers:{averageOfFour(4,5,8,7)}</div>
    <div className="text-2xl">Number of Zeros:{countNumber(0,0,5,8,7,0)}</div>
    <div className="text-2xl">Is Number Exist:{doesExist(8,[0,0,5,8,7,0])?"Yes Exist" :"Not Exist"}</div>

      <button
        className="bg-blue-700 m-5 p-3 "
        onClick={() => countVowel("Fahad")}
      >
        Count Vowel
      </button>
      
        <button
          className="bg-green-700 m-5 p-3"
          onClick={() => trianglePattren1(5)}
        >
          trangle 1
        </button>
      
     
        <button
          className="bg-green-700 m-5 p-3"
          onClick={() => trianglePattren2(5)}
        >
          trangle 2
        </button>

       

        
     
    </>
  );
};

export default ExampleComponent;

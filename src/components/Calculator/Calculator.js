import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {

    const [calc, setCalc] = useState({
        fulltext:"0",
        resulttext:"",
        isResultClicked:false,
        isResultValid:false
    })



    function handleDigits(e){
        e.target.classList.add("clicked")
        setTimeout(()=>e.target.classList.remove("clicked"), 100)
        let dig = e.target.innerHTML
        let prevText = calc.fulltext
        if(!calc.isResultClicked){
            setCalc({
                fulltext: prevText === "0" ? dig.toString() : prevText + dig.toString(),
                resulttext:"",
                isResultClicked:false,
                isResultValid: false
            })
        }else{
            setCalc({
                fulltext: dig.toString(),
                resulttext:"",
                isResultClicked:false,
                isResultValid: false
            })
        }
    }

    function handleOperations(e){
        e.target.classList.add("clicked")
        setTimeout(()=>e.target.classList.remove("clicked"), 100)
        let op = e.target.innerHTML
        let prevText = calc.fulltext
        if(!calc.isResultClicked){
            let lastText = calc.fulltext.slice(-1)
            if((lastText >= "0" && lastText <= "9") || lastText === "(" || lastText === ")"){
                setCalc({
                    fulltext: prevText+op,
                    isResultClicked:false
                })
            }else{
                setCalc({
                    fulltext: calc.fulltext.slice(0,-1)+op,
                    isResultClicked:false
                })
            } 
        }else{
            if(!calc.isResultValid){
                setCalc({
                    fulltext: "0",
                    resulttext:"",
                    isResultClicked:false,
                    isResultValid:false
                })
            }else{
                setCalc({
                    fulltext: calc.resulttext + op,
                    resulttext:"",
                    isResultClicked:false,
                    isResultValid:false
                })
            }
        }
    }

    function handleSpecialOperations(e){
        e.target.classList.add("clicked")
        setTimeout(()=>e.target.classList.remove("clicked"), 100)
        let mop = e.target.innerHTML
        switch(mop){
            case "AC": setCalc({
                fulltext: "0",
                resulttext:"",
                isResultClicked: false
            })
            break;
            case "C":
                if(calc.isResultClicked){
                    setCalc({
                        fulltext: "0",
                        resulttext:"",
                        isResultClicked: false,
                        isResultValid:false
                    })
                }else{

                    let newText = calc.fulltext.slice(0, -1)
                    setCalc({
                        fulltext: newText.length > 0? newText:"0",
                        resulttext:"",
                        isResultClicked: false,
                        isResultValid: false
                    })
                }
                break;
            case ".":
                if(calc.isResultClicked){
                    setCalc({
                        fulltext: "0.",
                        resulttext: "",
                        isResultClicked:false,
                        isResultValid:false
                    })
                }else{
                    let newText = calc.fulltext.slice(-1)
                    if(newText >= "0" && newText <= "9"){
                        setCalc({
                            fulltext: calc.fulltext + ".",
                            resulttext: "",
                            isResultClicked:false,
                            isResultValid:false
                        })
                    }else{
                        setCalc({
                            fulltext: calc.fulltext + "0.",
                            resulttext: "",
                            isResultClicked:false,
                            isResultValid:false
                        })
                    }
                }
            break;
            case "+/-":
                 if(calc.isResultClicked){
                    let firstText = calc.resulttext.slice(0,1)
                    if(firstText === "0" || !calc.isResultValid){
                        setCalc({
                            fulltext: "0",
                            resulttext: "",
                            isResultClicked:false,
                            isResultValid:false
                        })
                    }else if(firstText === "-"){
                        setCalc({
                            fulltext: calc.resulttext.slice(1),
                            resulttext: "",
                            isResultClicked:false,
                            isResultValid:false,
                            
                        })
                    }else if(firstText !== "0"){
                        setCalc({
                            fulltext: "-" + calc.resulttext,
                            resulttext: "",
                            isResultClicked:false,
                            isResultValid:false
                        })
                    }
                 }else{
                        let firstText = calc.fulltext.slice(0,1)
                        if(firstText === "-"){
                            setCalc({
                                fulltext: calc.fulltext.slice(1),
                                resulttext: "",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else if(firstText !== "0"){
                            setCalc({
                                fulltext: "-" + calc.fulltext,
                                resulttext: "",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }
                 }
                break;
                case "1/x": 
                    if(calc.isResultClicked){
                        if(!calc.isResultValid){
                            setCalc({
                                fulltext: "0",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else{
                            setCalc({
                                fulltext: "1/("+calc.resulttext+")",
                                resulttext: "",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }
                    }else{
                        let lastText = calc.fulltext.slice(-1) 
                        if(lastText >= "0" && lastText <= "9"){
                            setCalc({
                                fulltext: "1/(" + calc.fulltext + ")",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else{
                            let newText = calc.fulltext.slice(0,-1)
                            setCalc({
                                fulltext: calc.fulltext + "1/("+newText+")",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }
                    }
                break;
                case "sqrt":
                    if(calc.isResultClicked){
                        if(!calc.isResultValid || calc.resulttext === "0"){
                            setCalc({
                                fulltext: "0",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else{
                            setCalc({
                                fulltext: "Math.sqrt("+calc.resulttext+")",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }
                    }else{
                        let lastText = calc.fulltext.slice(-1)
                        if(calc.fulltext === "0"){
                            setCalc({
                                fulltext: "0",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else if(lastText >= "0" && lastText <= "9"){
                            setCalc({
                                fulltext: "Math.sqrt("+calc.fulltext+")",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else{
                            let newText = calc.fulltext.slice(0,-1)
                            setCalc({
                                fulltext: calc.fulltext + "Math.sqrt(" + newText + ")",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }
                    } 
                break;
                case "x^2":
                    if(calc.isResultClicked){
                        if(!calc.isResultValid || calc.resulttext === "0"){
                            setCalc({
                                fulltext: "0",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else{
                            setCalc({
                                fulltext: "Math.pow("+calc.resulttext+", 2)",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }
                    }else{
                        let lastText = calc.fulltext.slice(-1)
                        if(calc.fulltext === "0"){
                            setCalc({
                                fulltext: "0",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else if(lastText >= "0" && lastText <= "9"){
                            setCalc({
                                fulltext: "Math.pow("+calc.fulltext+", 2)",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }else{
                            let newText = calc.fulltext.slice(0,-1)
                            setCalc({
                                fulltext: calc.fulltext + "Math.pow(" + newText + ", 2)",
                                resulttext:"",
                                isResultClicked:false,
                                isResultValid:false
                            })
                        }
                    } 
                break;

            default:
        }

    }
    function handleEquate(e){
        e.target.classList.add("clicked")
        setTimeout(()=>e.target.classList.remove("clicked"), 100)

       try{
        let evaluation = eval(calc.fulltext)
        if(evaluation == "Infinity"){
            setCalc({
                fulltext: calc.fulltext,
                resulttext: "Invalid",
                isResultClicked:true,
                isResultValid:false
            })
        }else{
            setCalc({
                fulltext: calc.fulltext,
                resulttext: "" + evaluation,
                isResultClicked:true,
                isResultValid:true
            })
        }
       }catch(err){
        setCalc({
            fulltext: calc.fulltext,
            resulttext: "Invalid",
            isResultClicked:true,
            isResultValid:false
        })
       }
    }


  return (
    <div className='calculatorContainer'>
        <div className='appContainer'>
            <div className='resultContainer'>

                {!calc.isResultClicked && (
                    <p>{calc.fulltext}</p>
                )}
                    {calc.isResultClicked && (
                        <p>
                            <span className='expr'>
                                {calc.fulltext} = 
                            </span>
                            <span className='res'>
                                {calc.resulttext}
                            </span>
                        </p>
                    )}
            </div>
            <div className='buttonContainer'>
                <div className='row-1'>
                    <button className='memoryButton' onClick={handleSpecialOperations}>AC</button>
                    <button className='memoryButton' onClick={handleSpecialOperations}>C</button>
                </div>
                {/* <div className='row-2'>
                    <button className='memoryButton' onClick={handleSpecialOperations}>MC</button>
                    <button className='memoryButton' onClick={handleSpecialOperations}>MR</button>
                    <button className='memoryButton' onClick={handleSpecialOperations}>M+</button>
                    <button className='memoryButton' onClick={handleSpecialOperations}>M-</button>
                </div> */}
                <div className='row-3'>
                    <button className='digitButton' onClick={handleDigits}>7</button>
                    <button className='digitButton' onClick={handleDigits}>8</button>
                    <button className='digitButton' onClick={handleDigits}>9</button>
                    <button className='operationButton' onClick={handleOperations}>/</button>
                    <button className='operationButton' onClick={handleSpecialOperations}>sqrt</button>
                </div>
                <div className='row-4'>
                    <button className='digitButton' onClick={handleDigits}>4</button>
                    <button className='digitButton' onClick={handleDigits}>5</button>
                    <button className='digitButton' onClick={handleDigits}>6</button>
                    <button className='operationButton' onClick={handleOperations}>*</button>
                    <button className='operationButton' onClick={handleSpecialOperations}>x^2</button>
                </div>
                <div className='row-5'>
                    <button className='digitButton' onClick={handleDigits}>1</button>
                    <button className='digitButton' onClick={handleDigits}>2</button>
                    <button className='digitButton' onClick={handleDigits}>3</button>
                    <button className='operationButton' onClick={handleOperations}>-</button>
                    <button className='operationButton' onClick={handleSpecialOperations}>1/x</button>
                </div>
                <div className='row-6'>
                    <button className='operationButton' onClick={handleSpecialOperations}>.</button>
                    <button className='digitButton' onClick={handleDigits}>0</button>
                    <button className='operationButton' onClick={handleSpecialOperations}>+/-</button>
                    <button className='operationButton' onClick={handleOperations}>+</button>
                    <button className='operationButton' onClick={handleEquate}>=</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator

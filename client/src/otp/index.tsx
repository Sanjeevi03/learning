import { useEffect, useRef, useState } from "react";


const OTP_DIGITS = 5;

const OTP = () => {
  const [otp, setOtp] = useState(new Array(OTP_DIGITS).fill(""));

  const ref :any = useRef([]);

  useEffect(() => {
    ref.current[0]?.focus()
  }, []);

  const handleChange = (e:any, index:any) => {
    const value = e.target.value.trim();
    if(isNaN(value)) return;
    console.log(value)
    const copy = [...otp];
    copy[index] = value.slice(-1);
    setOtp(copy)
    value && ref.current[index+1]?.focus()
  };

  const handleDelete = (e:any, index:any) => {
    if(!e.target.value && e.key === "Backspace") {
      ref.current[index-1]?.focus()
    }
  };

  const refFunc = (input:any, index:any) => {
    ref.current[index] = input 
  }
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl my-2">OTP</h1>
      {
        otp.map((_, index:any) => (
          <input 
            key={index}
            type="text"
            value={otp[index]}
            // maxLength={1}
            ref={(input)=> refFunc(input, index)}
            className="border-1 border-gray-800 w-[50px] h-[50px] mx-1 rounded text-2xl text-center focus:ring-1"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleDelete(e, index)}
          />
        )
      )}
    </div>
  )
}

export default OTP;
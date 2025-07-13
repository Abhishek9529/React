import { useForm } from 'react-hook-form'


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async(data) =>{
    await new Promise((resole) => setTimeout(resole, 5000));
    console.log("Data", data)
  } 
  // console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <>
      {/* handleSubmit will validate our inputs before invoking the onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full h-screen flex flex-col gap-5 justify-center items-center bg-gray-800 text-white " action="">
        <div className="space-x-4">
          <label htmlFor="">firstName:</label>
          {/* register our input into the hook by invoking the "register" function  */}
          <input {...register("firstName", { required: true })} className="bg-slate-500" type="text" />
        </div>

        <div className="space-x-4">
          <label htmlFor="">middleName:</label>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("middleName",
            {
              required: true,
              maxLength: { value: 6, message: "max length must be 6" },
              minLength: { value: 3, message: "min length atleast 3" }
            })}

            className={` ${errors.middleName ? "bg-red-400" : "bg-slate-400"}`} type="text" />
          {errors.middleName && <span className='text-red-500'>{errors.middleName.message}</span>}
        </div>

        <div className="space-x-4">
          <label htmlFor="">lastName:</label>
          <input {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "lastName must be as per rules"
            }
          })} className="bg-slate-500" type="text" />
          {errors.lastName && <span className='text-red-500'>{errors.lastName.message}</span>}
        </div>

        <input type="submit" disabled={isSubmitting} 
        value={isSubmitting ? "Submitting..." : "Submit"} />

      </form>
    </>
  )
}

export default App

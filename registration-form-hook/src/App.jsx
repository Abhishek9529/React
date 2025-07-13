import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()

  const onSubmit = async (data) => {
    await new Promise((resole) => setTimeout(resole, 5000))
    console.log(data);
  }

  let watchedPass = watch("password")
  return (
    <>
      <div className=" w-full h-screen text-white bg-gray-700">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-8/12 h-[500px] mx-auto p-6 border space-y-4">
          {/* Full Name */}
          <div className='flex space-x-3'>
            <label htmlFor="fullname">Full Name :</label>
            <div className='flex flex-col'>
              <input {...register("fullname", {
                required: true,
                minLength: {
                  value: 3,
                  message: "*atleast 3 latters..."
                }
              })}
                className='border rounded-sm'
                id="fullname" type="text" />
              {errors.fullname && <span className='text-red-500 text-xs'>{errors.fullname.message}</span>}
            </div>
          </div>

          {/* Email */}
          <div className='flex space-x-3'>
            <label htmlFor="email">Email:</label>
            <div className='flex flex-col'>
              <input {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid Email Address"
                },
              })}
                className='border rounded-sm'
                id="email" type="email" />
              {errors.email && <span className='text-red-500 text-xs'>{errors.email.message}</span>}
            </div>
          </div>

          {/* Password */}
          <div className='flex space-x-3'>
            <label htmlFor="password">Password:</label>
            <div className='flex flex-col'>
              <input {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "*password must be 6 digits..."
                },
              })}
                className='border rounded-sm'
                id="password" type="password" />
              {errors.password && <span className='text-red-500 text-xs'>{errors.password.message}</span>}
            </div>
          </div>

          {/* Comfirm pass */}
          <div className='flex space-x-3'>
            <label htmlFor="confirmPass">Confirm Password:</label>
            <div className='flex flex-col'>
              <input {...register("confirmPass", {
                required: "required",
                validate: (value) => value === watchedPass || "*Please check password"
              })}
                className='border rounded-sm'
                id="confirmPass" type="password" />
              {errors.confirmPass && <span className='text-red-500 text-xs'>{errors.confirmPass.message}</span>}
            </div>
          </div>

          {/* Age */}
          <div className='flex space-x-3'>
            <label htmlFor="age">Age:</label>
            <div className='flex flex-col'>
              <input {...register("age", {
                required: "Age is required"
              })}
                className='border rounded-sm'
                id="age" type="number" />
              {errors.age && <span className='text-red-500 text-xs'>{errors.age.message}</span>}

            </div>
          </div>

          {/* Gender */}
          <div className='flex space-x-3'>
            <label>Gender:</label>

            <div className='flex '>
              <input id="male" type="radio" name='gender' value='male'
                {...register("gender", {
                  required: "gender is required"
                })}
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className='flex '>
              <input id="female" type="radio" name='gender' value='female'
                {...register("gender", {
                  required: "gender is required"
                })}
              />
              <label htmlFor="female">Female</label>
            </div>
            {errors.gender && <span className='text-red-500 text-xs'>{errors.gender.message}</span>}
          </div>

          {/* Country */}
          <div className='flex space-x-3'>
            <label htmlFor="country">Country:</label>
            <div className='flex flex-col'>
              <input {...register("country", {
                required: "*Country is required",
                minLength: {
                  value: 3,
                  message: "*atLeast 3 latters"
                }
              })}
                className='border rounded-sm'
                id="country" type="text" />
              {errors.country && <span className='text-red-500 text-xs'>{errors.country.message}</span>}

            </div>
          </div>

          {/* Terms & Conditions */}
          <div className='flex space-x-3 flex-row items-center '>
            <label htmlFor="termsAndCondi">Terms & Conditions:</label>
            <div className='flex flex-col'>
              <input {...register("termsAndCondi", { required: "Must be checked...", })}
                className='border rounded-sm mt-1'
                id="termsAndCondi" type="checkbox" />
              {errors.termsAndCondi && <span className='text-red-500 text-xs'>{errors.termsAndCondi.message}</span>}
            </div>
          </div>

          <input className='bg-blue-500 px-3 py-1 rounded-md' type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting..." : "Submit"}
          />
        </form>
      </div>
    </>
  )
}

export default App

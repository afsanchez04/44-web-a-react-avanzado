import { useForm } from 'react-hook-form'

export const Form = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>

        <div className='bg-white p-8 rounded-xl shadow-md w-full max-w-md'>
          <h1 className='text-2x1 font-bold mb-6 text-center text-blue-700'>Registro de usuario</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <input
              type='text'
              placeholder='Nombre completo'
              {...register('fullName')}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <input
              type='text'
              placeholder='Correo electrónico'
              {...register('email')}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <input
              type='text'
              placeholder='Edad'
              {...register('age')}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <input
              type='password'
              placeholder='Contraseña'
              {...register('password')}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <input
              type='password'
              placeholder='Confirmar contraseña'
              {...register('confirmPassword')}
              className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <input
              type='submit'
              value='Registrarse'
              className='w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer'
            />
          </form>
        </div>
      </div>
    </>
  )
}

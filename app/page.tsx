import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
const page = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center text-white px-2'>
            <h1 className='text-5xl font-bold mb-20'>ChatGpt</h1>
            <div className='flex space-x-2 text-center'>
                <div>
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <SunIcon className='h-8 w-8' />
                        <h2>Examples</h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='promptText cursor-pointer hover:bg-[rgba(32,33,35,1)]'>"Explain something to me"</p>
                        <p className='promptText cursor-pointer hover:bg-[rgba(32,33,35,1)]'>"What's the difference between a dog and a cat ?"</p>
                        <p className='promptText cursor-pointer hover:bg-[rgba(32,33,35,1)]'>"What is the color of the sun ?"</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <BoltIcon className='h-8 w-8' />
                        <h2>Examples</h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='promptText'>Remembers what user said earlier in the conversation</p>
                        <p className='promptText'>Allows user to provide follow-up corrections</p>
                        <p className='promptText'>Trained to decline inappropriate requests</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <ExclamationTriangleIcon className='h-8 w-8' />
                        <h2>Examples</h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='promptText'>May occasionally generate incorrect information</p>
                        <p className='promptText'>May occasionally produce harmful instructions or biased content</p>
                        <p className='promptText'>Limited knowledge of world and events after 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
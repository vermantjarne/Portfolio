const about = () => {
    return (
        <div className="container flex justify-center gap-20 items-center">
            <img src="/images/jarne-vermant.png" alt="Jarne Vermant" className="border-gray-700 border-2 rounded-lg w-80" />
            <div className="flex flex-col gap-5 max-w-lg text-md text-center text-gray-700 text-justify">
                <p>
                    I'm a student with <span className="highlight">4.5 years</span> of experience in development.
                    I am organized and resourceful, with a determined attitude.
                    My goal is to become a <span className="highlight">full-time developer and designer</span> for websites and web applications,
                    after acquiring a vast amount of knowledge in <span className="highlight">diverse coding languages and skills</span>.
                </p>
                <p className="font-size:18px">
                    Besides developing, my main interests consist of 
                    <span className="highlight"> photography</span> and <span className="highlight">music</span>.
                    I enjoy <span className="highlight">traveling</span> and learning new skills to utilize in my <span className="highlight">daily life</span>.</p>
                <a href="/files/Resumé.pdf" className="w-fit rounded-lg text-white bg-gray-700 py-3 px-5 hover:bg-gray-800 transition duration-300">
                    Resumé
                </a>
            </div>
        </div>
    );
};

export default about;
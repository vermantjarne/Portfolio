const about = () => {
    return (
        <div className="container flex flex-wrap justify-center gap-20 items-center">
            <img src="/images/jarne-vermant.png" alt="Jarne Vermant" className="border-gray-700 border-2 rounded-lg w-80" />
            <div className="relative flex justify-center max-w-lg">
                <div className="w-[90%] flex flex-col gap-5 text-md text-center text-gray-700 text-justify">
                    <p>
                        I&apos;m a student with <span className="highlight">4.5 years</span> of experience in development.
                        I am organized and resourceful, with a determined attitude.
                        My goal is to become a <span className="highlight">full-time developer and designer</span> for <span className="highlight">websites</span> and <span className="highlight">web applications</span>,
                        after acquiring a vast amount of knowledge in diverse programming languages and skills.
                    </p>
                    <p className="font-size:18px">
                        Besides developing, my main interests consist of 
                        <span className="highlight"> photography</span> and <span className="highlight">music</span>.
                        I enjoy constantly <span className="highlight">learning</span> new skills to utilize in my <span className="highlight">daily life</span>.</p>
                    <a href="/files/Resume.pdf" className="w-fit rounded-xl border-gray-400 border-2 bg-gray-200 py-2 px-6 hover:bg-gray-300 transition duration-300">
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default about;
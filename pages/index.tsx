import gearPic from "../public/gearImage.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className=" bg-gradient-to-b from-gray-200 to-gray-100 md:px-20 lg:px-40">
        <section className="min-h-full">
          <div className="flex flex-col text-center text-blue-gray-900 mb-8 w-1/2 ml-auto mr-auto">
            <div className="text-4xl font-extrabold min-w-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-purple-500 min-w-">
                Brett Szlachciuk
              </span>
            </div>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer </h3>
            <p className="text-lg py-5 leading-8 max-w-lg mx-auto sm:text-lg md:text-xl">
              I am a new grad from Northeastern University looking for software
              engineering roles. I have SDET work experience and am skilled in
              Java, TypeScript, and React.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h1 className="flex justify-center text-3xl text-gray-9s00 mb-8">
              Skillset
            </h1>
            <div className="lg:flex justify-center gap-10">
              <div className="flex flex-col text-center items-center shadow-lg p-10 rounded-xl my-10 w-full">
                <Image
                  src={gearPic}
                  width={100}
                  height={100}
                  alt="error"
                  placeholder="blur"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  QA/SDET Engineering
                </h3>
                <p className="text-blue-gray-900 py-1 max-w-md">
                  Developing automation test suites using Java and Selenium
                </p>
                <p className="text-blue-gray-900 py-1 max-w-md">
                  API testing with Postman and Swagger Docs
                </p>
                <p className="text-blue-gray-900 py-1 max-w-screen-md">
                  Developing test plans, test cases, and ensuring testing
                  standards are met
                </p>
              </div>
              <div className="flex flex-col text-center items-center shadow-lg p-10 rounded-xl my-10 w-full">
                <Image
                  src={gearPic}
                  width={100}
                  height={100}
                  alt="error"
                  placeholder="blur"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Software Development
                </h3>
                <p className="text-blue-gray-900 py-1">
                  Developing full stack applications
                </p>
                <h4 className="test-md ">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 min-w-">
                    Technologies
                  </span>
                </h4>
                <p className="text-blue-gray-900 py-1">
                  TypeScript, React, Node
                </p>
                <p>Java, Python</p>
                <p>SQL</p>
              </div>
              <div className="flex flex-col text-center items-center shadow-lg p-10 rounded-xl my-10 w-full">
                <Image
                  src={gearPic}
                  width={100}
                  height={100}
                  alt="error"
                  placeholder="blur"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Other Skills</h3>
                <p className="text-blue-gray-900 py-1">
                  Education and communicating ideas
                </p>
                <p className="text-blue-gray-900 py-1">Philosophy education</p>
                <p className="text-blue-gray-900 py-1">
                  IT Skills from my co-op at Wayfair
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";


export default function About() {
  return (
    <div>
      <Head>
        <title>Fizz Energy | About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fizz-logo.png" />
      </Head>

      <main>

        <div className="about">
            <div className="about__header">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="AboutVideo.mp4" type="video/mp4"/>
                        <source src="../img/video.webm" type="video/webm"/>
                        Your browser is not supported!
                    </video>
              </div>

              <div className="about__title">
                <h2>About Us</h2>
              </div>
            </div>

            <div className="about__content">
                <p><span> Lorem ipsum</span> dolor sit, amet consectetur adipisicing elit. Sunt, quam ratione, mollitia hic nisi repellendus asperiores culpa itaque distinctio doloribus aperiam excepturi unde earum saepe voluptatem tempore officiis praesentium laboriosam quidem assumenda explicabo veritatis! Dicta veritatis commodi ullam sit tenetur doloremque sequi vel velit voluptate assumenda reprehenderit quaerat iusto, perspiciatis laboriosam quibusdam quos asperiores pariatur rerum error! Nesciunt, tenetur ipsum! Voluptate adipisci maiores sequi ut repudiandae, ab totam cupiditate exercitationem placeat voluptas voluptatem quis eaque officia amet odio quibusdam eveniet molestiae repellendus aut rerum repellat autem soluta fugit unde! Quisquam culpa temporibus doloribus. Aspernatur ullam quasi dicta expedita! Ea ad earum odio veniam laborum quibusdam eius et necessitatibus deleniti voluptatum qui dolore, voluptatem veritatis corporis laudantium molestias magni. Culpa temporibus quas voluptas? Officiis nisi expedita minima incidunt ipsam iure veritatis distinctio quia possimus sit similique id illum quod unde ullam quaerat explicabo beatae, ex ad earum, maxime recusandae fuga error?</p>
                <p> Dicta veritatis commodi ullam sit tenetur doloremque sequi vel velit voluptate assumenda reprehenderit quaerat iusto, perspiciatis laboriosam quibusdam quos asperiores pariatur rerum error! Nesciunt, tenetur ipsum! Voluptate adipisci maiores sequi ut repudiandae, ab totam cupiditate exercitationem placeat voluptas voluptatem quis eaque officia amet odio quibusdam eveniet molestiae repellendus aut rerum repellat autem soluta fugit unde! Quisquam culpa temporibus doloribus. Aspernatur ullam quasi dicta expedita! Ea ad earum odio veniam laborum quibusdam eius et necessitatibus deleniti voluptatum qui dolore, voluptatem veritatis corporis laudantium molestias magni. Culpa temporibus quas voluptas? Officiis nisi expedita minima incidunt ipsam iure veritatis distinctio quia possimus sit similique id illum quod unde ullam quaerat explicabo beatae, ex ad earum, maxime recusandae fuga error?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam, eligendi perspiciatis earum ducimus dolore magnam non, exercitationem adipisci dolorem voluptatibus voluptate inventore quos accusantium totam consequatur hic molestiae. Ipsa assumenda repellat soluta at, iure dignissimos quia et similique voluptates beatae optio numquam qui inventore, facere, est neque. Minima adipisci animi corporis maiores quibusdam aspernatur explicabo necessitatibus omnis. Sapiente quam consequatur harum iure cum quisquam deserunt eveniet doloremque quo. Sit.</p>
            </div>
        </div>
      </main>
    </div>
  );
}

/*
 
<About_us></About_us>
*/

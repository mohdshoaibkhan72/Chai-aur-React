

//card ke ander is trah se likhne se ..ham kisi ki bhi value change kr skte  hy


function Card({ username = "shoiab", position = "Enginear" }) {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://imgs.search.brave.com/K6HKEHMppeCzpJ8OGD-pEvu4nnLTIB-w8Dlp6Sh4BEA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/aWRlLWFuZ2xlLXNo/b3Qtc2luZ2xlLXRy/ZWUtZ3Jvd2luZy1j/bG91ZGVkLXNreS1k/dXJpbmctc3Vuc2V0/LXN1cnJvdW5kZWQt/YnktZ3Jhc3NfMTgx/NjI0LTIyODA3Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium  text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">{position}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Card;

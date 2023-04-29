function Hero() {
  return (
    <main>
      <div class="flex min-h-screen bg-white ">
        <div class="flex flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
          <div class="w-full mx-auto lg:max-w-6xl">
            <div class="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
              <div>
                <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  Exploring the world of tech
                </p>
                <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Сайн байна уу? Наранмандах байна. Би 22 настай бакалаврын
                  оюутан. Сурах хугацаандаа веб хөгжүүлэлтийн, программчлалын
                  хичээлүүд болох алгоритмын үндэс, Си, Системийн шинжилгээ ба
                  зохиомж, Цахим системийн программчлал болон бусад гэх мэт
                  хичээлүүдийг үзсэн ба хувиараа Reactjs болон Smart contract
                  хөгжүүлэлт оролдож байсан туршлагатай. Цаашид хөгжиж болохуйц
                  газар горилж буй жирийн л нэг шинэ төгсөгч. Оролдож байсан,
                  оролдож буй төслүүдийг доор жагсаалаа. :)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex-1 hidden w-0 lg:block">
          <div>
            <img
              class="absolute inset-0 object-cover w-full h-full bg-gray-200 lg:border-l"
              src="https://res.cloudinary.com/dp7ejpuvw/image/upload/v1682779820/test/275780867_3186133451707633_1009755889215039314_n_otdrzp.jpg"
              alt=""
            ></img>{" "}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

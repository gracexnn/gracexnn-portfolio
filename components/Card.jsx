function Card() {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/341670240_187964857435203_677263126348446808_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ImPqCWf58egAX_F8Hc4&_nc_ht=scontent.fuln1-1.fna&oh=03_AdS1YLV2xwwqzUTkEuQrJ11CV5QReY0IJGALWBS6SO0Ifw&oe=646E2A41&dl=1')",
        backgroundSize: "cover",
      }}
    >
      <ul className="flex flex-wrap">
        <li className="w-96 m-4 glass">
          <figure>
            <img
              src="https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/341747013_647185223889627_5672863563599690147_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MQBwvwzVIGwAX8o6o6m&_nc_ht=scontent.fuln1-2.fna&oh=03_AdT-18Ul5zUl7XYscHcc-caRBmkVVMc3EKxvJcnTG7Ts8w&oe=646E3F4C&dl=1"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Сошиал апп</h2>
            <p>
              Сошиал хэрэглээний хэт төвлөрсөн байдал үүсэх нь цаашид эрсдэл
              дагуулна гэж бодож буй учир өөрсдийн гэсэн олон нийтийн харилцааны
              хэрэгсэл байсан нь дээр гэж бодон оролдож буй апп юм.
            </p>

            <ul>
              <b>Ашигласан технологиуд</b>:<li>★MongoDB</li>
              <li>★ExpressJS</li>
              <li>★ReactJS</li>
              <li>★NodeJS</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://app.haais.space" target="_blank">
                  Сонирхох
                </a>
              </button>
            </div>
          </div>
        </li>

        <li className="w-96 m-4 glass">
          <figure>
            <img
              src="https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/342056752_253576013805824_2821196014406713525_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4kEMJAHGvAYAX815hjn&_nc_ht=scontent.fuln1-2.fna&oh=03_AdT5gm1EYo9itpZEi6FANMmiqv_I-Vg77snZbU8Xhyi4xQ&oe=646E3FE0&dl=1"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Scribble Diffusion</h2>
            <p>
              Хиймэл оюун ухаан ашиглан ноорог зурж түүнийгээ хүссэн стайлдаа
              хувирган промпт өгснөөр бодит мэт зураг болгох аппликейшны
            </p>

            <ul>
              <b>Ашигласан технологиуд</b>:<li>★ControlNet</li>
              <li>★NextJS</li>
              <li>★Replicate</li>
              <li>★NodeJS</li>
              <li>★Upload.io</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://paint.argun.ga" target="_blank">
                  Сонирхох
                </a>
              </button>
            </div>
          </div>
        </li>

        <li className="w-96 m-4 glass">
          <figure>
            <img
              src="https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/341795539_175844928699420_3303619495772279489_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KyHMe6HJZT4AX_pI6qO&_nc_ht=scontent.fuln1-1.fna&oh=03_AdR9gkoboTX6E-kZ56xvYwoyVcH8zT6qg5BFoDHJSR3G7g&oe=646E52F1&dl=1"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Haais.Space угтах хуудас</h2>
            <p>Онцын зүйлгүй зүгээр л бие даалтанд зориулж хийсэн хуудас</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                ер нь сонирхоод яахын2
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Card;

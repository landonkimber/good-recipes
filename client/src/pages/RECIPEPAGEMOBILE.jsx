import { useParams, Link } from "react-router-dom";
import {
  FaClock,
  FaUserAlt,
  FaUtensils,
  FaFireAlt,
  FaSoap,
  FaDollarSign,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import recipeData from "../data/recipes.json";
import slugify from "slugify";

const IconRating = ({ count, total = 5, Icon, color, emptyColor }) => (
  <div className="flex gap-1">
    {[...Array(total)].map((_, i) => (
      <Icon
        key={i}
        className={`text-xl md:text-5xl mx-0 md:mx-1 ${
          i < count ? color : emptyColor
        }`}
      />
    ))}
  </div>
);

const RecipePage = () => {
  window.scrollTo(0, 0);
  const screenWidth = window.innerWidth;
  const { slug } = useParams();

  const recipe = recipeData.find(
    (r) => slugify(r.title, { lower: true }) === slug
  );

  if (!recipe) {
    return <div className="text-center text-red-600">Recipe not found.</div>;
  }

  console.log(`Recipe : ${recipe}`);

  return (
    <div className="relative w-full flex flex-col">
      {/* ---HEADER--- */}
      <div id="recipe-page-header" className="w-full h-[80vh] flex flex-col">
        {/* Header title */}
        <div
          id="recipe-page-title"
          className="bg-slate-800 w-full h-[15%] sm:h-[15%] md:h-[20%] flex flex-col"
        >
          <h1 className="h-1/2 w-full"></h1>
          <div className="h-1/2 w-full flex justify-center items-center lg:justify-start">
            <h2 className="relative translate-y-4 lg:translate-y-8 rounded-sm bg-slate-300 lg:left-[14%] p-2 w-fit text-2xl md:text-4xl text-slate-900 font-redhat font-bold  z-20">
              {recipe.title}
            </h2>
          </div>
        </div>
        {/* Header Hero */}
        <div
          id="recipe-page-hero"
          className="relative flex w-full lg:flex-row items-center justify-center lg:justify-between h-[50%]"
        >
          {/* Overlay */}
          <div className="absolute h-[100%] w-full bg-slate-800/80 backdrop-blur-md pointer-events-none" />
          {/* Image */}
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-[105%] pl-0 lg:pl-[12%] w-fit z-10 rounded-md"
          />
          {screenWidth > 768 ? (
            <div
              id="recipe-page"
              className="w-1/2 h-[80%] bg-slate-500 z-10 rounded-l-lg pr-[12%]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dignissimos itaque ratione ab hic, eaque veniam eveniet nostrum
              officia corrupti, molestias similique vitae placeat mollitia ex!
              Iusto, magni esse. Iure?
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* Header Padding */}
        <div className="bg-slate-800 w-full h-[1.5rem] lg:h-[2.3rem]"></div>
        {/* Header Stats */}
        {screenWidth < 768 ? (
          <div
            id="recipe-page-stats"
            className="w-full bg-slate-500 h-[30%] pr-0 lg:pr-[12%]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dignissimos itaque ratione ab hic, eaque veniam eveniet nostrum
            officia corrupti, molestias similique vitae placeat mollitia ex!
            Iusto, magni esse. Iure?
          </div>
        ) : (
          <></>
        )}
      </div>
      <div
        id="recipe-page-content"
        className="w-full h-auto w-max-7xl bg-gray-800/50"
      >
        <div id="content-container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          eveniet labore assumenda libero rerum! Alias deserunt repellat beatae
          assumenda fuga laboriosam cupiditate perferendis reiciendis deleniti
          nemo officiis autem iure dignissimos, vitae minus est. Minus labore
          esse vitae consequatur reiciendis, molestias, quae culpa modi possimus
          sapiente ullam quia doloremque commodi temporibus recusandae corporis
          magnam quam magni numquam? Facere cupiditate iure inventore animi
          porro enim perspiciatis! Molestias iusto, commodi laudantium, officiis
          pariatur, error itaque maiores delectus provident quae facere rerum
          dolor corrupti autem ipsum voluptatum consectetur eaque debitis ab
          porro ipsa repellat officia illo? Voluptatum ut in vitae ex dicta
          possimus adipisci quam a, ratione sunt beatae tenetur aspernatur
          cupiditate quas saepe suscipit soluta magnam placeat impedit nemo.
          Consequuntur, et. Nam, laborum sit eum necessitatibus repudiandae
          eaque cupiditate eligendi quas atque aperiam, sapiente tenetur porro
          dicta laboriosam officia. Perferendis, officiis expedita molestiae,
          libero quaerat alias, impedit fugit quisquam facilis adipisci quae
          provident. Sapiente at laborum nobis nulla quas qui fugit maiores
          saepe delectus eos quo deleniti hic, assumenda esse, tempora labore
          mollitia vel itaque reprehenderit facilis suscipit recusandae non!
          Dolorum sed distinctio ipsum hic rerum? Nostrum placeat at debitis,
          architecto sit culpa. Cumque quo dolorem veniam optio nisi quisquam
          accusantium sequi vitae ipsum minus nemo architecto, quam doloremque
          asperiores magnam ad? Velit recusandae alias quas fugiat assumenda
          dicta facilis autem hic tempora, quo cum explicabo sapiente vero odio,
          quos fuga consequatur! Labore aliquam recusandae praesentium aperiam
          beatae saepe ab blanditiis eveniet aliquid totam maxime temporibus
          itaque vero, pariatur expedita mollitia eligendi facilis rerum
          consequatur distinctio minus, eum alias assumenda fugiat? Sunt,
          explicabo animi. Magni a odit cum assumenda doloribus odio ea
          perferendis dolore consectetur reiciendis tenetur natus, quidem amet
          dolorem optio distinctio, esse ducimus sequi rem aliquid neque quae!
          Aperiam facere voluptate, consectetur repellendus esse, debitis
          exercitationem ea quisquam maiores suscipit reprehenderit minima
          placeat excepturi dignissimos provident temporibus voluptatem nisi rem
          sed quasi laudantium doloribus. Saepe enim fuga similique. Tenetur
          velit enim vel natus rerum reprehenderit nulla laborum, sunt
          reiciendis ducimus facere est et, dignissimos earum aliquid! Ipsum
          dicta fugit at quibusdam eius reprehenderit, amet sunt officiis
          cupiditate aliquam perferendis iste architecto corrupti minus soluta
          ratione fuga! Aliquid ea commodi corrupti dignissimos praesentium sint
          sed, temporibus est quisquam accusamus, earum, facere nobis? Ullam
          dolor perspiciatis cum repudiandae dignissimos porro, dolorum
          blanditiis mollitia quasi modi! Porro at eos temporibus nemo illo
          omnis est quae maiores repudiandae, dolore ea assumenda deserunt
          molestiae ipsum, quas eligendi hic similique repellendus. Dignissimos
          non maiores itaque sequi numquam consequatur culpa, voluptatem
          eligendi alias, sunt quod delectus eum saepe reiciendis doloremque
          perferendis officia, totam voluptate incidunt reprehenderit possimus
          sint vel? Quam recusandae sit possimus totam sunt magni labore ad
          quisquam harum sed! Maiores nisi optio impedit debitis assumenda iste
          corporis. Temporibus quia similique quo placeat vel cumque, amet
          labore ut quas reiciendis asperiores quidem eius. Iure iste assumenda
          quae, quibusdam enim cupiditate reiciendis minima quia blanditiis,
          perferendis quos. Rem ipsam obcaecati excepturi ut quis incidunt
          consectetur dolorum. Explicabo iure soluta facilis autem minima
          praesentium necessitatibus dolor, dignissimos temporibus architecto
          est ut molestiae nulla ea quaerat! Illum deleniti aliquam eum corrupti
          dolorum soluta culpa vitae quo accusantium voluptates temporibus
          exercitationem, hic nam consequatur minima omnis nostrum facilis
          laborum! Nostrum fugiat, assumenda optio sapiente ab voluptate dolore
          nihil error ratione qui nulla. Repellendus ipsam delectus quo hic
          placeat voluptatibus sequi iste impedit quam sint neque incidunt ipsum
          officia omnis atque soluta veritatis nihil, non culpa doloremque
          perspiciatis praesentium quibusdam iusto? Ducimus molestiae blanditiis
          sequi vel reprehenderit veniam animi! Facere perspiciatis, officiis,
          consectetur deserunt aliquid delectus iusto unde dignissimos suscipit
          molestiae dolorum labore, possimus totam quaerat aperiam veritatis
          corporis praesentium vitae fugit illum. Tempore natus veritatis beatae
          optio asperiores dolores labore expedita aliquid distinctio itaque
          voluptatibus ipsum non repudiandae voluptatem cupiditate omnis,
          voluptates recusandae facere adipisci consequatur porro quas officia!
          Labore alias, deleniti eum modi impedit eos. Consequatur aspernatur
          dignissimos molestias vero? Sequi repudiandae soluta voluptatem
          molestias doloribus, harum error a, ex eum vitae cupiditate repellat
          tempore consequatur est tempora reiciendis natus eaque fugit quia
          repellendus quidem rem. Explicabo repellendus, porro dignissimos
          aliquam quo quam nesciunt dicta, quaerat, minus mollitia suscipit
          ipsum eos. Quos, laudantium voluptates earum suscipit animi vel maxime
          corporis numquam in nihil quisquam neque beatae rerum fugit!
          Perferendis, officiis?
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

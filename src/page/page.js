const React = require('react');

class Page extends React.Component() {
  return() {
      <DefaultLayout>
      <div>
          <body>
        <header>
<h1> Sartre's List </h1>
<h2> Better-Dressed People </h2>

<div class="header-list">
    <nav aria-label="Main Navigation" role="navigation">
        <ul>
            <li><a href="..."> Women's </a> </li>
            <li><a href="..."> Men's </a> </li>
            <li><a href="..."> On the Street </a> </li>
            <li><a href="..."> The Catwalk </a> </li>
            <li><a href="..."> AdWatch </a> </li>
            <li><a href="..."> About </a> </li>
        </ul>
    </nav>
</div>
</header>

<main>
<article> 
    <h2> 11/12/20 </h2>
    <h2 id="header-name"> On the Street in Brooklyn </h2>
    <img src="../../public/photos/fashion blog pic 1.jpg" />
    <p id="letter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officia maxime aut voluptas, doloremque quidem molestiae hic odio dolore iste, quaerat aspernatur repellat accusamus eaque eius, ea minus corrupti deserunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas unde sint dolorem doloremque quia facilis error nesciunt. Praesentium dignissimos incidunt, nemo voluptates porro in fugit nostrum adipisci accusantium cumque voluptatem.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quod dolorem rem nobis possimus nulla corrupti. Consectetur obcaecati dignissimos dolore, asperiores explicabo, molestiae quod quaerat vel tempora est eaque voluptas.
    </p> 
    <p id="continues"><a href="...">Continues ... </a></p>
</article>
<article>
    <h2> 11/11/20 </h2> 
    <h2 id="header-name"> Vintage in Vogue </h2>
    <img src="../../public/photos/fashion blog pic 2.jpg" />
    <p id="letter"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam nisi voluptate eos dolores animi saepe suscipit dignissimos nihil. Cupiditate iste nobis cumque quas! Eum velit doloremque adipisci facere nemo.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis labore, libero quia a accusantium vitae, natus cupiditate quaerat aut numquam ipsa voluptate magnam enim delectus at fugiat omnis eveniet rerum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quas soluta eum modi voluptates ipsam odio ducimus vero ab veniam expedita architecto, labore, repellat eveniet qui rem quis! Impedit, eaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur quasi illum voluptatum iure nisi, officiis itaque nulla vel. Blanditiis, veritatis et. Et laboriosam quaerat eius voluptatem. Architecto, soluta repudiandae?
    </p>
    <p id="continues"><a href="...">Continues ... </a></p>
</article>
</main>

<footer>
    <div class="footer-list">
    <nav aria-label="Main Navigation" role="navigation">
        <ul>
            <li><a href="..."> Women's </a> </li>
            <li><a href="..."> Men's </a> </li>
            <li><a href="..."> On the Street </a> </li>
            <li><a href="..."> The Catwalk </a> </li>
            <li><a href="..."> AdWatch </a> </li>
            <li><a href="..."> About </a> </li>
        </ul>
    </nav>
    </div>
    <p class="footer"> &copy; Valet Industries, Inc  </p>    
</footer>
</body>
    </div>
    </DefaultLayout>
  };
}

export default Page;
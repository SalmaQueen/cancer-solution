.clear:before,
.clear:after {
  content: " ";
  display: table;
}

.clear {
  *zoom: 1;
}

.clear:after {
  clear: both;
}

/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
#nav-dots,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

a {
  background-color: transparent;
}

a:active,
a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: 700;
}

dfn {
  font-style: italic;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

mark {
  background: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: 700;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

/*! HTML5 Boilerplate v5.0 | MIT License | http://h5bp.com/ */

html {
  color: #222;
  font-size: 1em;
  line-height: 1.4;
}

::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

.browserupgrade {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

/* ===== Initializr Styles ==================================================
   Author: Jonathan Verrecchia - verekia.com/initializr/responsive-template
   ========================================================================== */

body {
  font: 16px/1.5 "Raleway", Helvetica, Helvetica Neue, Arial, sans-serif;
  background-color: #212121;
}

.wrapper {
  width: 80%;
  margin: 10%;
}

/* Make the body 100% of the browser viewport height */

html,
body {
  height: 100%;
  margin: 0;
}

h1 {
  font-size: 2em;
  margin-top: 0;
  font-family: "Roboto Condensed", Helvetica, Helvetica Neue, Arial, sans-serif;
  font-weight: 700;
}

/* ==========================================================================
   Author's custom styles
   ========================================================================== */

/* =Preloader */

/* #preloader {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 101;
  background-color: #212121;
  color: #ffffff;
}

#preloader .txt {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#preloader .txt-perc {
  font-size: 35px;
  font-family: 'Roboto Condensed', Helvetica, Helvetica Neue, Arial, sans-serif;
  opacity: 1;
  margin: 0 0 6px 0;
  max-width: 400px;
  text-align: center;
}

#preloader .progress {
  width: 100px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto 15px auto;
}

#preloader .progress span {
  display: block;
  width: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}

#preloader.is-hidden {
  visibility: hidden;
  opacity: 0;
}

.is-loading {
  overflow: hidden;
}
 */

/* =Header */

.header-container {
  text-align: center;
  color: #ffffff;
}

.header-container .wrapper {
  padding-top: 820px;
  z-index: 2;
  position: relative;
}

.header-container .bcg {
  -webkit-transition: -webkit-transform 4s ease-out;
  transition: transform 4s ease-out;
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}

.header-container.is-loaded .bcg {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.bcg {
  background: no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.5;
}

#slide01 .bcg {
  background: black;
  opacity: 0.5;
}

.header-container .bcg {
  background: url(https://images.unsplash.com/photo-1589575975335-41113818c81d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)
    no-repeat center center;
  background-size: cover;
  opacity: 0.5;
}

#slide02 .bcg {
  background: black;
}

#slide03 .bcg {
  background: url(https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)
    no-repeat center center;
  background-size: cover;
  opacity: 0.7;
}

/* =Navigation */
ul.horizontal-nav {
  position: fixed;
  left: 0;
  top: 5%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: 100;
}

.horizontal-nav a {
  display: block;
  line-height: 25px;
  position: relative;
  padding-right: 20px;
  color: #ffffff;
  text-decoration: none;
}

.horizontal-nav a:hover {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.horizontal-nav .nav-horizontal {
  display: block;
  width: auto;
  height: 10px;
  position: absolute;
  right: 0;
  top: 50%;
}

.horizontal-nav ul {
  margin: 0;
  padding: 0;
}

.horizontal-nav li {
  width: auto;
  list-style: none;
  display: inline-block;
}

/* =Navigation Dots */
#nav-dots {
  display: none;
  position: fixed;
  right: 30px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: right;
  z-index: 100;
}

#nav-dots a {
  display: block;
  line-height: 25px;
  position: relative;
  padding-right: 20px;
  color: #ffffff;
  text-decoration: none;
}

#nav-dots a:hover .nav-label {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

#nav-dots .nav-dot {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

#nav-dots .nav-label {
  display: block;
  opacity: 0.5;
  visibility: hidden;
  -webkit-transform: translateX(-10px);
  -ms-transform: translateX(-10px);
  transform: translateX(-10px);
  -webkit-transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

#nav-dots.is-dark a {
  color: #212121;
}

#nav-dots.is-dark .nav-dot {
  background-color: rgba(0, 0, 0, 0.5);
}

#nav-dots.is-light a {
  color: #ffffff;
}

#nav-dots.is-light .nav-dot {
  background-color: rgba(255, 255, 255, 0.5);
}

#nav-dots ul {
  margin: 0;
  padding: 0;
}

#nav-dots li {
  width: auto;
  list-style: none;
}

.scroll-hint {
  color: #212121;
  position: absolute;
  bottom: 30px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 10px 40px;
  border: 3px #ffffff solid;
  font-size: 13px;
  font-weight: bold;
  font-family: "Roboto Condensed", Helvetica, Helvetica Neue, Arial, sans-serif;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 2;
}

/* =Main */

p {
  font-size: 16px;
}

.fs {
  height: 100vh;
}

.slide {
  color: #ffffff;
  position: relative;
}

.slide .wrapper {
  padding-top: 30px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.slide#slide01 .wrapper {
  position: absolute;
  top: 10%;
}

.slide#slide02 .wrapper {
  position: absolute;
  bottom: 10%;
}

.slide#slide03 .button {
  border-color: #ffffff;
  color: #212121;
  background-color: rgba(255, 255, 255, 0.9);
}

.slide#slide03 .button:hover {
  border-color: #212121;
  background-color: #212121;
  color: #ffffff;
}

.slide#slide03 .wrapper {
  padding-top: 100px;
}

.slide#slide04 {
  background-color: #be4c2c;
}

.button {
  text-decoration: none;
  color: #ffffff;
  border: 1px rgba(255, 255, 255, 0.7) solid;
  padding: 8px 15px;
  margin-top: 15px;
  display: inline-block;
  position: relative;
}

.button:hover {
  border-color: #ffffff;
  background-color: #ffffff;
  color: #000000;
}

/* =Content Block */

.content-block {
  background-color: #212121;
  color: rgba(255, 255, 255, 0.9);
}

.content-block .wrapper {
  padding: 30px 0;
  text-align: center;
}

.no-touch .content-block .wrapper {
  visibility: hidden;
  opacity: 0;
}

.no-touch .content-block.is-active .wrapper {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* =Footer */

.footer-container {
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  background-color: #06060d;
}

.footer-container h3 {
  margin: 0;
  padding: 20px 0;
  font-weight: normal;
}

.footer-container a {
  color: rgba(255, 255, 255, 0.5);
}

/* =Simple animation up */

.no-touch .slideInUp {
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.9s ease-out;
  transition: all 0.9s ease-out;
  -webkit-transform: translate3d(0, 150px, 0);
  transform: translate3d(0, 150px, 0);
}

.no-touch .is-active .slideInUp {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slideInUp.slideInUp2 {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.slideInUp.slideInUp3 {
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}
.content-block {
  background-color: #2ecc71 !important;
}

#iht_logo {
  width: 100px;
  margin-bottom: 30px;
}

/* ==========================================================================
   Media Queries
   ========================================================================== */

@media only screen and (min-width: 768px) {
  body {
    font-weight: 100;
  }
  h1 {
    font-size: 3em;
  }
  p {
    font-size: 20px;
  }
  /* =Header */
  .header-container {
    overflow: hidden;
    position: relative;
  }
  .header-container .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -120%);
    -ms-transform: translate(-50%, -120%);
    transform: translate(-50%, -120%);
    margin: 0;
    padding: 0;
  }
  .header-container:before {
    font-size: 70em;
  }
  .scroll-hint {
    font-size: 20px;
  }
  .bcg {
    opacity: 1;
  }
  .slide {
    overflow: hidden;
    overflow-x: hidden;
  }
  .slide section {
    max-width: 400px;
  }
  .slide .wrapper {
    padding-top: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: left;
    width: 100%;
    margin: 0;
  }
  .slide#slide01,
  .slide#slide02,
  .slide#slide03 {
    color: #212121;
  }
  .slide#slide01 .wrapper,
  .slide#slide02 .wrapper,
  .slide#slide03 .wrapper {
    top: 20%;
    text-align: center;
  }
  .slide#slide01 section,
  .slide#slide02 section,
  .slide#slide03 section {
    margin: 0 auto;
  }
  .slide#slide02 {
    color: #ffffff;
  }
  .slide#slide02 .wrapper {
    top: auto;
    bottom: 40%;
    left: 10%;
    text-align: left;
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
    padding: 0;
  }
  .slide#slide02 section {
    margin: 0;
  }
  .slide#slide03 .wrapper {
    padding: 0;
    top: 15%;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  .slide#slide03 section {
    margin: 0 auto;
    max-width: 570px;
  }
  .slide#slide03 .button {
    border-color: rgba(0, 0, 0, 0.7);
    background-color: transparent;
    color: #212121;
  }
  .slide#slide03 .bcg {
    opacity: 1;
  }
  #nav-dots {
    display: block;
  }
  .content-block .wrapper {
    padding: 120px 0;
  }
}

/* ==========================================================================
   Helper classes
   ========================================================================== */

.hidden {
  display: none !important;
  visibility: hidden;
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.invisible {
  visibility: hidden;
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

/* ==========================================================================
   Print styles
   ========================================================================== */

/* @media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
}

@media print {
  * {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  .ir a:after,
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  @page {
    margin: 0.5cm;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
} */
.cards {
  display: flex;
}
body {
  overflow: auto !important;
}

.card:hover,
.card:focus-within {
  transform: translateY(-1rem);
}
.card:hover ~ .card,
.card:focus-within {
  transform: translateX(calc(-4rem) * -1);
}
img {
  height: 300px;
  width: 300px;
}
.card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 4px 4px 15px 2px rgba(black, 0.75);
  transition: 0.2s;
}

.card:not(:first-child) {
  margin-left: -2rem;
}
.card:hover {
  transform: translateY(-1rem);
}
.card:hover ~ .card {
  translate: transformX(4rem);
  background: green;
}
@media only screen and (max-width: 500px) {
  card:not(:first-child) {
    margin-left: 0;
  }
}

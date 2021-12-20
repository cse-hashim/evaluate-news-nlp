<div class="_main--content-container--ILkoI"><span><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h2 id="project-motivation">Project Motivation</h2>
<p>The motive of this project is to have you a taste of the environment and tools you will most likely come across in a front end role. Your focus should be to understand the role every tool and technology is playing in the overall architecture. You shouldn’t feel the need to memorize the particular commands, config setups, or structure that we create here. Every project in the industry will have its own custom setup, but <em>if you understand the moving pieces, you will be able to get the gist of even far more complicated projects than this one.</em> </p>
<h2 id="project-introduction-what-you-will-build">Project Introduction - What You Will Build</h2>
<p>We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.</p>
<p>You don't have to worry about NLP, because we will make use of an external api called <a target="_blank" href="https://aylien.com/">Aylien</a> to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone. </p>
<p>Following are the project prerequisites: </p>
<ul>
<li>Webserver - Node </li>
<li>Web application framework for routing - Express </li>
<li>Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands. </li>
<li>External script - Service Worker</li>
<li>External API - Aylien </li>
</ul>
<h2 id="introduction-to-natural-language-processing">Introduction to Natural Language Processing</h2>
<p>NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech. </p>
<h4 id="nlp-on-human-voice">NLP on Human Voice</h4>
<p>For example, everyone who has used Alexa or Google Assistant or other voice command systems knows that these devices are always improving, by collecting and interpreting voice data. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but the tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages. </p>
<h4 id="nlp-on-text">NLP on Text</h4>
<p>An example is Grammarly editing tool, which parses the text that you write, and suggests if the tone is professional or not. Another example is the Smart Compose feature for Gmail that uses NLP to suggest words and statements based on your current context. </p>
<p>It requires a vast amount of knowledge from machine learning, deep learning, AI, statistics, and programming to create NLP systems and algorithms. 
<strong>But, thankfully we will use a new API called Aylien, that has put a public-facing API in front of their NLP system. We will use it in our project to determine various attributes of an article or blog post.</strong></p>
</div></div><span></span></div><span></span></div></div></span></div>
<div class="_main--content-container--ILkoI"><span><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h1 id="project-instructions">Project Instructions</h1>
<p>This <a target="_blank" href="https://github.com/udacity/fend/tree/refresh-2019/">Github repository</a> is your starter code for the project. Clone the <code>refresh-2019</code> branch or download the ZIP file, although feel free to start from scratch! It is the same as the starter code we began with in Lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!</p>
<p>The goal of this project is to give you practice with:</p>
<ul>
<li>Setting up Webpack</li>
<li>Sass styles</li>
<li>Webpack Loaders and Plugins</li>
<li>Creating layouts and page design</li>
<li>Service workers</li>
<li>Using APIs and creating requests to external URLs</li>
</ul>
<p>We have divided the instructions into the following stages, as  explained below:</p>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h2 id="stage-1-getting-started-setting-up-the-project">Stage 1 - Getting Started - Setting up the Project</h2>
<p>It would be good to first get your basic project up and functioning. Fork the project Github repo, and then clone or download the zip file locally. Remember that once you clone, you will still need to install everything:</p>
<pre><code><span class="hljs-built_in">cd</span> &lt;project directory&gt;
npm install
</code></pre><p>Follow the steps from the course up to Lesson 4, but <strong><em>do not add Service Workers just yet</em></strong>. We won't need the service workers during <em>development</em>, and having extra caches floating around just means there's more potential for confusion. Just for your quick reference, we installed the following loaders and plugins so far:</p>
<pre><code><span class="hljs-comment"># Choose the necessary installation for your development mode</span>
<span class="hljs-built_in">npm</span> i -D <span class="hljs-property">@babel</span>/core <span class="hljs-property">@babel</span>/preset-env babel-loader
<span class="hljs-built_in">npm</span> i -D style-loader node-sass css-loader sass-loader
<span class="hljs-built_in">npm</span> i -D clean-webpack-plugin
<span class="hljs-built_in">npm</span> i -D html-webpack-plugin
<span class="hljs-built_in">npm</span> i -D mini-css-extract-plugin
<span class="hljs-built_in">npm</span> i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
</code></pre></div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h2 id="stage-2-setting-up-the-api">Stage 2 - Setting up the API</h2>
<p><strong>If you started this project on or before July 7, 2020,</strong> you will be using the Aylien API for this project. The Aylien API has you install a node module to run certain commands through. It will simplify the requests we need to make from our node/express backend.</p>
<p><strong>If you started this project after July 7, 2020,</strong> you will be using the MeaningCloud Sentiment Analysis API for this project.</p>
<p>The <a target="_blank" href="https://review.udacity.com/#!/rubrics/2668/view">project rubric</a> item for "API" criteria says:</p>
<blockquote>
<p>The app should make a successful call to the API on form submission. If this is successful, the API keys and response handling were done correctly. You can check that the API keys are found in server.js or a similar node file. It is not acceptable for an API key to be set in a client-facing file (like index.js)</p>
</blockquote>
<blockquote>
<p>Information from the API response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc.</p>
</blockquote>
<h4 id="step-1-sign-up-for-an-api-key">Step 1: Sign up for an API key</h4>
<p><strong>For the Aylien API:</strong> You will need to go to the <a target="_blank" href="https://developer.aylien.com/signup">user signup page</a>. Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.</p>
<p><strong>For the MeaningCloud API</strong>: You can find the API <a target="_blank" href="https://www.meaningcloud.com/developer/sentiment-analysis">here</a>. Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.</p>
<h4 id="step-2-install-the-sdk-aylien-api-only-">Step 2: Install the SDK (Aylien API only)</h4>
<p>Next, you'll need to get the Software Development Kit (SDK) for Node.js. SDK is usually a program that brings together various tools to help you work with a specific technology. For instance, the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server. Aylien SDKs are available for all the major languages and platforms, such as Node, Python, PHP, Go, Ruby, and many others. </p>
<p>Install the SDK in your project, as per the instructions mentioned for <strong>Node.js SDK</strong> at <a target="_blank" href="https://docs.aylien.com/textapi/sdks/#node-js-sdk">Text Analysis API Documentation</a>.</p>
<h4 id="step-3-require-the-sdk-package-aylien-api-only-">Step 3: Require the SDK package (Aylien API only)</h4>
<p>Your <code>server/index.js</code> file must have these things:</p>
<pre><code><span class="hljs-comment">// Require the Aylien npm package</span>
<span class="hljs-keyword">var</span> aylien = <span class="hljs-built_in">require</span>(<span class="hljs-string">"aylien_textapi"</span>);
</code></pre></div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h4 id="step-4-environment-variables">Step 4: Environment Variables</h4>
<p>Next, in <code>server/index.js</code>, you need to declare your API credentials, which will look something like this:</p>
<pre><code class="lang-js"><span class="hljs-comment">// You could call it aylienapi, or anything else</span>
<span class="hljs-keyword">var</span> textapi = <span class="hljs-keyword">new</span> aylien({
  application_id: <span class="hljs-string">"your-api-id"</span>,
  application_key: <span class="hljs-string">"your-key"</span>
});
</code></pre>
<p><strong>If you are using the MeaningCloud API</strong>, the process will look pretty similar to the Aylien API process, but you don’t need to use an <code>application_id</code>.</p>
<p><em>...But there's a problem with this.</em> We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly, are never a good thing. So, we have to figure out a way to make that not happen. </p>
<p>The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold value. The environment variables only belong to your local system and won't be visible when you push your code to a different environment like Github. Follow the steps below to configure environment variables:</p>
<ol>
<li>Use npm to install the dotenv package - <code>npm install dotenv</code> This will allow us to use environment variables we set in a new file</li>
<li>Create a new <code>.env</code> file in the root of your project.</li>
<li>Fill the <code>.env</code> file with your API keys like this:<pre><code>API_ID=<span class="hljs-strong">*****</span><span class="hljs-strong">*****</span><span class="hljs-strong">*****</span><span class="hljs-strong">*****</span><span class="hljs-strong">*****</span>*
API_KEY=<span class="hljs-strong">*****</span><span class="hljs-strong">*****</span><span class="hljs-strong">*****</span><span class="hljs-strong">*****</span><span class="hljs-strong">*****</span>*
</code></pre></li>
<li>Add this code to the very top of your <code>server/index.js</code> file:<pre><code><span class="hljs-keyword">const</span> dotenv = <span class="hljs-built_in">require</span>(<span class="hljs-string">'dotenv'</span>);
dotenv.config();
</code></pre></li>
<li>If you want to refer the environment variables, try putting a prefix <code>process.env.</code> in front of the variable name in the <code>server/index.js</code> file, an example might look like this:<pre><code><span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Your API key is <span class="hljs-subst">${process.env.API_KEY}</span>`</span>);
</code></pre>The step above is just to help you understand how to refer an environment variable from your code. In <code>server/index.js</code>, your updated API credential settings should look like this:<pre><code class="lang-js"><span class="hljs-comment">// You could call it aylienapi, or anything else</span>
<span class="hljs-keyword">var</span> textapi = <span class="hljs-keyword">new</span> aylien({
   application_id: process.env.API_ID,
   application_key: process.env.API_KEY
});
</code></pre>
</li>
<li>Go to your <code>.gitignore</code> file, in the project root, and add <code>.env</code>. It will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys would become pointless.</li>
</ol>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h4 id="step-5-using-the-api">Step 5: Using the API</h4>
<p>We're ready to go! The Aylien API has a lot of different endpoints you can take a look at the <a target="_blank" href="https://docs.aylien.com/textapi/endpoints/#api-endpoints">Aylien API endpoints</a>. You can see how using the SDK simplifies the requests we need to make. You can also check out the documentation of the MeaningCloud API <a target="_blank" href="https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1">here</a>. MeaningCloud also has several other APIs, which we won’t be using for this project, but feel free to take a look around if you’re curious!</p>
<p>Now it's up to you to create the various requests and make sure your server is set up appropriately. For example, ensure that the "dependencies" in <code>package.json</code>  have a suitable entry for Aylien, such as, <code>"aylien_textapi": "^0.7.0",</code>, where the version may vary with time.</p>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h2 id="stage-3-project-enhancement">Stage 3 - Project Enhancement</h2>
<p>At the current stage, make enhancement in your project code to ensure most of the requirements as mentioned in the <a target="_blank" href="https://review.udacity.com/#!/rubrics/2668/view">project rubric</a> are met. In addition, parse the response body to dynamically fill content on the page.</p>
<p>Only the rubric requirements related to "Offline Functionality" and "Testing" criteria should remain for the next stages.</p>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h2 id="stage-4-unit-testing-using-jest-framework">Stage 4 - Unit Testing using Jest Framework</h2>
<p>You must have read the rubric item for "Testing" criteria, that says:</p>
<blockquote>
<p>Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/client/js file should have at least one test.</p>
</blockquote>
<p><a target="_blank" href="https://jestjs.io/en/">Jest</a> is a framework for testing JavaScript projects. We are interested in the unit-testing of our project. The Jest framework provides us the ability to create, and run unit tests. In general, unit testing means to test the functionality of each unit/component of a project. But, in our case, we will write tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input. Let's learn to add Jest to your project to handle unit-testing. </p>
<h3 id="how-does-it-work-">How does it work?</h3>
<ol>
<li>Install Jest by using  <code>npm install --save-dev jest</code></li>
</ol>
<ol start="2">
<li>Write the custom JS in your src/client/js directory, responsible for the server, and form submission task. <strong>For example</strong>, assume that the <code>/src/client/js/formHandler.js</code> file has the following function to be tested:<pre><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleSubmit</span>(<span class="hljs-params">event</span>) </span>{
    event.preventDefault()
    <span class="hljs-comment">// check what text was put into the form field</span>
    <span class="hljs-keyword">let</span> formText = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'name'</span>).value
    Client.checkForName(formText)
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"::: Form Submitted :::"</span>)
}
<span class="hljs-keyword">export</span> { handleSubmit }
</code></pre>
</li>
</ol>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><ol start="3">
<li><p><strong>You have to ensure that all your custom functions in src/client/js directory can handle error responses if the user input does not match API requirements.</strong> You will write tests in <code>&lt;function_name&gt;.test.js</code> or <code>&lt;function_name&gt;.spec.js</code> file, to be present in a <code>__test__</code> folder. For each functionality, consider writing a separate test file. The <code>__test__</code> folder should be present in the project directory.  </p>
<p>In each test file, the general flow of the test block should be:</p>
<ul>
<li>Import the js file to test</li>
<li>Define the input for the function. Note that, to keep it simple, we will not validate the input being provided to the test cases. </li>
<li>Define the expected output</li>
<li>Check if the function produces the expected output</li>
</ul>
<p>For the example function shown above, <code>/src/client/js/formHandler/handleSubmit()</code>, you can write a test file <code>testFormHandler.spec.js</code> in the <code>__test__</code> directory, having a test block as:</p>
<pre><code class="lang-js"><span class="hljs-comment">// Import the js file to test</span>
<span class="hljs-keyword">import</span> { handleSubmit } <span class="hljs-keyword">from</span> <span class="hljs-string">"../src/client/js/formHandler"</span>
</code></pre>
<pre><code><span class="hljs-comment">// The describe() function takes two arguments - a string description, and a test suite as a callback function.  </span>
<span class="hljs-comment">// A test suite may contain one or more related tests    </span>
describe(<span class="hljs-string">"Testing the submit functionality"</span>, () =&gt; {
    <span class="hljs-comment">// The test() function has two arguments - a string description, and an actual test as a callback function.  </span>
    test(<span class="hljs-string">"Testing the handleSubmit() function"</span>, () =&gt; {
           <span class="hljs-comment">// Define the input for the function, if any, in the form of variables/array</span>
           <span class="hljs-comment">// Define the expected output, if any, in the form of variables/array</span>
           <span class="hljs-comment">// The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output</span>
           <span class="hljs-comment">// The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher</span>
           expect(handleSubmit).toBeDefined();
})});
</code></pre><p>You must be wondering about the matchers, and other syntactical information about test blocks. At this point, you must refer to the external resources:</p>
<ul>
<li><a target="_blank" href="https://jestjs.io/docs/en/getting-started">Jest - Getting started</a> - Provides a basic overview, with the help of an example.</li>
<li><a target="_blank" href="https://jestjs.io/docs/en/using-matchers">Jest - matchers</a> - Read carefully to identify the suitable matcher for each of your functions.</li>
<li><a target="_blank" href="https://jestjs.io/docs/en/asynchronous">Jest - testing asynchronous code</a> - If you have code that runs asynchronously.</li>
<li><a target="_blank" href="https://www.valentinog.com/blog/jest/">A tutorial for beginners</a> - A good explanatory tutorial.</li>
</ul>
</li>
</ol>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><ol start="4">
<li>Configure an npm script named "test" in <code>package.json</code> to run your tests from the command line:<pre><code class="lang-js"><span class="hljs-string">"scripts"</span>: {
    <span class="hljs-string">"test"</span>: <span class="hljs-string">"jest"</span>
}
</code></pre>
Also, ensure that the "devDependencies" in <code>package.json</code>  have a suitable entry for Jest and others, such as, <code>"jest": "^25.3.0",</code>, where the version may vary with time.</li>
</ol>
<ol start="5">
<li>Run the <code>npm run test</code> command.</li>
</ol>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h2 id="stage-5-service-workers">Stage 5 - Service Workers</h2>
<p>The rubric item for "Offline Functionality" criteria says:</p>
<blockquote>
<p>The project must have set up service workers in webpack.</p>
</blockquote>
<p>Go to the webpack config file, and add the setup for service workers. Test that the site should be available even when you stop your local server.</p>
</div></div><span></span></div><span></span></div></div><div><div class="index--container--2OwOl"><div class="index--atom--lmAIo layout--content--3Smmq"><div class="ltr"><div class="_15vzQlp3FJ8f94suLiPCPf ureact-markdown "><h2 id="stage-6-deployment">Stage 6 - Deployment</h2>
<p>A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but check out <a target="_blank" href="https://www.netlify.com/">Netlify</a> or <a target="_blank" href="https://www.heroku.com/">Heroku</a> for some really intuitive free hosting options.</p>
</div></div><span></span></div><span></span></div></div></span></div>
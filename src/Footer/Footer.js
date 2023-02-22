

const Footer =() => {
   

    return (
        <div class="footer-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black pt-6 md:pt-12">
        <div class="container px-4 mx-auto">
      
          <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
      
            <div class="footer-info lg:w-1/3 md:px-4">
              <h4 class="text-white text-2xl mb-4">250K users are using Cry/pro and making their life easy.</h4>
              <p class="text-gray-400">We are carefully crafted to suit to everyone's need.</p>
              <div class="mt-4">
                <button class="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                  <span class="fab fa-facebook-f mr-2"></span> Follow
                </button>
                <button class=" py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                  <span class="fab fa-twitter mr-2"></span> Follow @Cry/pro
                </button>
              </div>
            </div>
      
            <div class="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div class="sm:flex">
                <div class="sm:flex-1">
                  <h6 class="text-base font-medium text-white uppercase mb-2">About</h6>
                  <div>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Company</a>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Culture</a>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Team</a>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Careers</a>
                  </div>
                </div>
                <div class="sm:flex-1 mt-4 sm:mt-0">
                  <h6 class="text-base font-medium text-white uppercase mb-2">What we offer</h6>
                  <div>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Blocks</a>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Resources</a>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Tools</a>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Tutorials</a>
                    <a href="#" class="text-gray-400 py-1 block hover:underline">Freebies</a>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
              <h5 class="text-lg text-white font-medium mb-4">Explore our site</h5>
              <button class="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">Explore</button>
            </div>
      
          </div>
      
        </div>
      
        <div class="border-t border-solid border-gray-900 mt-4 py-4">
          <div class="container px-4 mx-auto">
      
            <div class="md:flex md:-mx-4 md:items-center">
              <div class="md:flex-1 md:px-4 text-center md:text-left">
              
              </div>
              <div class="md:flex-1 md:px-4 text-center md:text-right">
                <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
                <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
              </div>
            </div>
      
          </div>
        </div>
      
      </div>
    );
}
export default Footer;
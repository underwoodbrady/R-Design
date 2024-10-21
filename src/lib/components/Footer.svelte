<script lang="ts">
    
    import Instagram from 'virtual:icons/mdi/instagram';
    import Facebook from 'virtual:icons/mdi/facebook';
    import Twitter from 'virtual:icons/mdi/twitter';
    import Email from 'virtual:icons/mdi/email-outline';
</script>

<footer class="relative z-20 w-full  px-xl pt-3xl pb-lg bg-primary-12 ">
    <div class="flex flex-col max-w-screen-xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="mb-xl md:mb-0">
                <img src="/LogoSVG(dark).svg" alt="Logo Dark" class="w-32 mb-lg"/>
                <p class="text-primary-3 max-w-md">Seasonal staging and design team bringing the magic of the holidays to your home or office, located In Seattle, WA</p>
            </div>
            <div class="flex space-x-3xl">
                <div>
                    <h3 class="text-primary-5 text-xl marcellus mb-md">Navigation</h3>
                    <ul class="text-primary-1 flex flex-col space-y-sm">
                        <li class="hover:text-primary-9 duration-100 transition-colors"><a href="/">
                            Home
                        </a></li>
                        <li class="hover:text-primary-9 duration-100 transition-colors"><a href="/gallery">Gallery</a></li>
                        <li class="hover:text-primary-9 duration-100 transition-colors"><a href="/services">Services</a></li>
                        <li class="hover:text-primary-9 duration-100 transition-colors"><a href="/blog">Blog</a></li>
                        <li class="hover:text-primary-9 duration-100 transition-colors"><a href="/">Contact</a></li>
                    </ul>
                </div>
                <!--  w-[205px] h-[41px] -->
                <div>
                    <div class="mb-lg">
                        <h3 class="text-primary-5 text-xl marcellus mb-md">Join Our Mailing List</h3>
                        <div class="relative w-[205px] h-[41px] border border-primary-5 rounded-sm">
                            <input name='email' placeholder="Enter Email" class=" pl-2xl absolute inset-0 rounded-sm outline-none bg-transparent text-primary-1"/>   
                            <Email class="absolute left-3 top-[10px] text-primary-5"/>
                        </div>
                        
                    </div>
                    <div>
                        <h3 class="text-primary-5 text-xl marcellus mb-md">Follow Us</h3>
                        <div class="flex-center space-x-md text-primary-1 text-lg">
                            <Instagram class="hover:text-primary-9 duration-100 transition-colors"/>
                            <Facebook class="hover:text-primary-9 duration-100 transition-colors"/>
                            <Twitter class="hover:text-primary-9 duration-100 transition-colors"/>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3xl">
            <p class="text-primary-9 text-sm">Copyright © 2024-2025, Spruce Seasonal Staging And Decor</p>
        </div>
    </div>
    
  
</footer>
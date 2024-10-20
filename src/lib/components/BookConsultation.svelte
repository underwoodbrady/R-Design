<script>
	import Button from "./Button.svelte";
import Input from "./Input.svelte";
import Instagram from 'virtual:icons/mdi/instagram';
    import Facebook from 'virtual:icons/mdi/facebook';
    import Twitter from 'virtual:icons/mdi/twitter';
	import InputLong from "./InputLong.svelte";
</script>
<div class="px-xl py-3xl">
    <h3 class="text-blue-12 text-4xl marcellus mb-2xl">Book A Consultation</h3>
    <div class="flex space-x-2xl justify-between">
        <div class="max-w-sm text-lg">
            <h4 class="font-semibold mb-md text-xl">Spruce - Seasonal Staging And Decor</h4>
            <p class="text-black-11 mb-lg">We are a full-service seasonal staging and design team bringing the magic of the holidays to your home or office</p>
            <div class="  p-lg bg-primary-3 rounded-md">
                <p class="text-primary-12 font-semibold mb-sm text-xl">Email Us</p>
                <p class="text-primary-9">rachel@spruceseasonalstaging.com </p>
                <p class="text-primary-9 mb-lg">partner@spruceseasonalstaging.com </p>
                <p class="text-primary-12 font-semibold mb-sm text-xl">Call Us</p>
                <p class="text-primary-9 mb-lg">123-456-7890</p>
                <p class="text-primary-12 font-semibold mb-sm text-xl">Follow Us</p>
                <div class="flex-center space-x-md text-primary-9 text-lg">
                    <Instagram/>
                    <Facebook/>
                    <Twitter/>
            
                </div>
            </div>
        </div>
    
        <form class="flex flex-col space-y-md flex-1">
            <div class="flex items-center space-x-sm">
                <Input label="First Name" placeholder="First Name" required/>
                <Input label="Last Name" placeholder="Last Name" required/>
            </div>
            <Input label="Email" placeholder="Enter Email" required/>
            <Input label="Phone" placeholder="Enter Phone"/>
            <InputLong label="Tell Us What You Are Hoping For!" placeholder="" required/>
            <Input label="How Did You Hear About Us?" placeholder=""/>
            <div class="mx-auto">

                <Button>Submit Form</Button>
            </div>
        </form>
    </div>
  
</div>
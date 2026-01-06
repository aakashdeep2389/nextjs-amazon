# nextjs-amazon

https://www.youtube.com/watch?v=WLHCPwqHzzQ - 38:08 last
lesson 03 - comsplete - last

vercel app - https://nextjs-amazon-kg7wxeh6n-aakashs-projects-13b5a929.vercel.app/

npm i zod - used data validation package


vercel main URl- https://nextjs-amazon-taupe.vercel.app/
https://nextjs-amazon-git-develop-aakashs-projects-13b5a929.vercel.app/


BUG
1. when u create a new account and using the already exist email then in first try only if email already exist application will get you sign in and redirect to dashboard without asking you to actual sign-in

1/2/26
google auth connected with dev.aakash000


import { toast } from 'sonner';

toast.error('Error', {
    description: 'Invalid email or password',
}); 

for ai chat clt+alt+B
### Microfront Example

#### To run application

```
$ git clone https://github.com/EdisonDevadoss/micro-frontend-webpack-example
$ cd micro-frontend-webpack-example
```
##### Open four terimials and run the following commands

```
$ cd home
$ yarn & yarn start
```

```
$ cd cart
$ yarn & yarn start
```

```
$ cd pdp
$ yarn & yarn start
```

```
$ cd server
$ yarn & yarn start
```

##### I have followed this tutorial (https://www.youtube.com/watch?v=lKKsjpH09dU&t=66s) and create this example. Here I have used typescript instead of Javascript.

### Note:
    After this video tutorial Module federation is updated a lot. 

    If you follow the video and create an example, it will provide rspack.config.ts instead webpack.config.ts

    If you want webpack.config.ts and follow the rest of the tutorial, you need to run the following command.


``` $ pnpx create-mf-app@1.1.8 ```

    In my code, I have faced in one challange in the react-router-dom. It did not work properly when routing from home to the cart.

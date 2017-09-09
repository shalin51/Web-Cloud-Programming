/**
 * Created by deven on 9/8/2017.
 */
$( document ).ready(function() {
    $('#order_header').html('');
    $('#order_body').html('');
    var order = localStorage.getItem("order");

    switch(order) {
        case 'Jeans':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Jeans</span><img src="./images/jeans.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Women':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Women</span><img src="./images/women.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Shorts':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Shorts</span><img src="./images/short.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'iPad':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>iPad</span><img src="./images/ipad.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Kindle':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Kindle</span><img src="./images/kindle.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'HeadPhones':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>HeadPhones</span><img src="./images/headphone.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Laptop':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Laptop</span><img src="./images/laptop.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Bed':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Bed</span><img src="./images/bed.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Comforter':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Comforter</span><img src="./images/comforter.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Dinning Table':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Dinning Table</span><img src="./images/dinningtable.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Sofa':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Sofa</span><img src="./images/sofa.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Bed Lamp':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Bed Lamp</span><img src="./images/bedlamp.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Training Shoes':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Training Shoes</span><img src="./images/shoes.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Gym Wear':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Gym Wear</span><img src="./images/gymwear.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Gloves':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Gloves</span><img src="./images/gloves.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;
        case 'Golf Cap':
            $('#order_header').append('<div class="col-md-3"><span style="display: block;">Order Placed</span><span>Sept 8, 2017</span></div><div class="col-md-3"><span style="display: block;">Total</span><span>$16.00</span></div><div class="col-md-3"><span  style="display: block;">Ship To</span><span>Devender Sarda</span></div><div class="col-md-3"><span style="display: block;">Order #</span><span>113-245-535554426585</span></div>');
            $('#order_body').append('<div class="col-md-12"><div class="col-md-6"><span>Golf Cap</span><img src="./images/cap.png" alt="Jeans" height="200" width="175"></div><div class="col-md-6"><span>Choose a delivery option</span><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 14-19</label></div><div class="radio"  style="display: block;"><label><input type="radio" name="optradio">Sept 13-18</label></div><div class="radio"  style="display: block;"><label><input type="radio"  name="optradio" disabled>Wednesday, Sept. 13</label></div></div></div>');
            break;

        default:
        //code block
    };


});
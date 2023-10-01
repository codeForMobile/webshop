import asyncHandler from "../middleware/asyncHandler.js";

//  @desc    Create new order
//  @route   Post api/orders
//  @access  Private
const addOrderItems = asyncHandler(async (req,res) =>{
    res.send('add order items')
})

//  @desc    Get logged in user orders
//  @route   Get api/orders/myorders
//  @access  Private
const getMyOrders = asyncHandler(async (req,res) =>{
    res.send('get my orders')
})

//  @desc    Get order by Id
//  @route   Get api/orders/:id
//  @access  Private
const getOrderById = asyncHandler(async (req,res) =>{
    res.send('get order by id')
})

//  @desc    Update order to paid
//  @route   Get api/orders/:id/pay
//  @access  Private
const updateOrderToPaid = asyncHandler(async (req,res) =>{
    res.send('update order to paid')
})

//  @desc    Update order to delievered
//  @route   Get api/orders/:id/deliver
//  @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req,res) =>{
    res.send('update order to delivered')
})

//  @desc    Get all orders
//  @route   Get api/orders
//  @access  Private/Admin
const getOrders = asyncHandler(async (req,res) =>{
    res.send('get all orders')
})

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid,
    getOrders
}
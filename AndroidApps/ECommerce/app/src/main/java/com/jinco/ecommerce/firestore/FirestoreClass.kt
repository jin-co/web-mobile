package com.jinco.ecommerce.firestore

import android.app.Activity
import android.content.Context
import android.content.SharedPreferences
import androidx.fragment.app.Fragment
import com.jinco.ecommerce.ui.activities.RegisterActivity
import com.jinco.ecommerce.ui.activities.*
import com.jinco.ecommerce.ui.fragments.DashboardFragment
import com.jinco.ecommerce.ui.fragments.OrdersFragment
import com.jinco.ecommerce.ui.fragments.ProductsFragment
import com.jinco.ecommerce.ui.fragments.SoldProductsFragment
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.SetOptions
import com.jinco.ecommerce.models.*

import com.jinco.ecommerce.widgets.Constants

class FirestoreClass {
    private val fireStore = FirebaseFirestore.getInstance()

//    user
    fun registerUser(activity: RegisterActivity, userInfo: User) {
        fireStore.collection(Constants.USERS)
            .document(userInfo.id)
            .set(userInfo, SetOptions.merge())
            .addOnSuccessListener {
                activity.userRegistrationSuccess()
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun getUserDetails(activity: Activity) {
        fireStore.collection(Constants.USERS)
            .document(getCurrentUserID())
            .get()
            .addOnSuccessListener { document ->
                val user = document.toObject(User::class.java)!!
                val sharedPreferences =
                    activity.getSharedPreferences(
                        Constants.MYSHOPPAL_PREFERENCES,
                        Context.MODE_PRIVATE
                    )
                val editor: SharedPreferences.Editor = sharedPreferences.edit()
                editor.putString(
                    Constants.LOGGED_IN_USERNAME,
                    "${user.firstName} ${user.lastName}"
                )
                editor.apply()

                when (activity) {
                    is LoginActivity -> {
                        activity.userLoggedInSuccess(user)
                    }

                    is SettingsActivity -> {
                        activity.userDetailsSuccess(user)
                    }
                }
            }
            .addOnFailureListener { e ->
                when (activity) {
                    is LoginActivity -> {
                        activity.hideProgressDialog()
                    }
                    is SettingsActivity -> {
                        activity.hideProgressDialog()
                    }
                }
            }
    }

    fun updateUserProfileData(activity: Activity, userHashMap: HashMap<String, Any>) {
        fireStore.collection(Constants.USERS)
            .document(getCurrentUserID())
            .update(userHashMap)
            .addOnSuccessListener {
                when (activity) {
                    is UserProfileActivity -> {
                        activity.userProfileUpdateSuccess()
                    }
                }
            }
            .addOnFailureListener { e ->
                when (activity) {
                    is UserProfileActivity -> {
                        activity.hideProgressDialog()
                    }
                }
            }
    }

//    delete test
//    fun uploadImageToCloudStorage(activity: Activity, imageFileURI: Uri?, imageType: String) {
//        val sRef: StorageReference = FirebaseStorage.getInstance().reference.child(
//            imageType + System.currentTimeMillis() + "."
//                    + Constants.getFileExtension(
//                activity,
//                imageFileURI
//            )
//        )
//
//        sRef.putFile(imageFileURI!!)
//            .addOnSuccessListener { taskSnapshot ->
//                taskSnapshot.metadata!!.reference!!.downloadUrl
//                    .addOnSuccessListener { uri ->
//                        when (activity) {
//                            is UserProfileActivity -> {
//                                activity.imageUploadSuccess(uri.toString())
//                            }
//
//                            is AddProductActivity -> {
//                                activity.imageUploadSuccess(uri.toString())
//                            }
//                        }
//                    }
//            }
//            .addOnFailureListener { exception ->
//
//                when (activity) {
//                    is UserProfileActivity -> {
//                        activity.hideProgressDialog()
//                    }
//
//                    is AddProductActivity -> {
//                        activity.hideProgressDialog()
//                    }
//                }
//            }
//    }

    fun addProductDetails(activity: AddProductActivity, productInfo: Product) {
        fireStore.collection(Constants.PRODUCTS)
            .document()
            .set(productInfo, SetOptions.merge())
            .addOnSuccessListener {
                activity.productUploadSuccess()
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun getProductsList(fragment: Fragment) {
        fireStore.collection(Constants.PRODUCTS)
            .whereEqualTo(Constants.USER_ID, getCurrentUserID())
            .get()
            .addOnSuccessListener { document ->
                val productsList: ArrayList<Product> = ArrayList()
                for (i in document.documents) {
                    val product = i.toObject(Product::class.java)
                    product!!.product_id = i.id
                    productsList.add(product)
                }

                when (fragment) {
                    is ProductsFragment -> {
                        fragment.successProductsListFromFireStore(productsList)
                    }
                }
            }
            .addOnFailureListener { e ->
                when (fragment) {
                    is ProductsFragment -> {
                        fragment.hideProgressDialog()
                    }
                }
            }
    }

    fun getAllProductsList(activity: Activity) {
        fireStore.collection(Constants.PRODUCTS)
            .get()
            .addOnSuccessListener { document ->
                val productsList: ArrayList<Product> = ArrayList()

                for (i in document.documents) {
                    val product = i.toObject(Product::class.java)
                    product!!.product_id = i.id
                    productsList.add(product)
                }

                when (activity) {
                    is CartListActivity -> {
                        activity.successProductsListFromFireStore(productsList)
                    }
                    is CheckoutActivity -> {
                        activity.successProductsListFromFireStore(productsList)
                    }
                }
            }
            .addOnFailureListener { e ->
                when (activity) {
                    is CartListActivity -> {
                        activity.hideProgressDialog()
                    }
                    is CheckoutActivity -> {
                        activity.hideProgressDialog()
                    }
                }
            }
    }

    fun getDashboardItemsList(fragment: DashboardFragment) {
        fireStore.collection(Constants.PRODUCTS)
            .get()
            .addOnSuccessListener { document ->
                val productsList: ArrayList<Product> = ArrayList()

                for (i in document.documents) {
                    val product = i.toObject(Product::class.java)!!
                    product.product_id = i.id
                    productsList.add(product)
                }

                fragment.successDashboardItemsList(productsList)
            }
            .addOnFailureListener { e ->
                fragment.hideProgressDialog()
            }
    }

    fun deleteProduct(fragment: ProductsFragment, productId: String) {
        fireStore.collection(Constants.PRODUCTS)
            .document(productId)
            .delete()
            .addOnSuccessListener {
                fragment.productDeleteSuccess()
            }
            .addOnFailureListener { e ->
                fragment.hideProgressDialog()
            }
    }

    fun getProductDetails(activity: ProductDetailsActivity, productId: String) {
        fireStore.collection(Constants.PRODUCTS)
            .document(productId)
            .get()
            .addOnSuccessListener { document ->
                val product = document.toObject(Product::class.java)!!
                activity.productDetailsSuccess(product)
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun addCartItems(activity: ProductDetailsActivity, addToCart: Cart) {
        fireStore.collection(Constants.CART_ITEMS)
            .document()
            .set(addToCart, SetOptions.merge())
            .addOnSuccessListener {
                activity.addToCartSuccess()
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun checkIfItemExistInCart(activity: ProductDetailsActivity, productId: String) {
        fireStore.collection(Constants.CART_ITEMS)
            .whereEqualTo(Constants.USER_ID, getCurrentUserID())
            .whereEqualTo(Constants.PRODUCT_ID, productId)
            .get()
            .addOnSuccessListener { document ->
                if (document.documents.size > 0) {
                    activity.productExistsInCart()
                } else {
                    activity.hideProgressDialog()
                }
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun getCartList(activity: Activity) {
        fireStore.collection(Constants.CART_ITEMS)
            .whereEqualTo(Constants.USER_ID, getCurrentUserID())
            .get()
            .addOnSuccessListener { document ->
                val list: ArrayList<Cart> = ArrayList()
                for (i in document.documents) {
                    val cartItem = i.toObject(Cart::class.java)!!
                    cartItem.id = i.id
                    list.add(cartItem)
                }

                when (activity) {
                    is CartListActivity -> {
                        activity.successCartItemsList(list)
                    }
                    is CheckoutActivity -> {
                        activity.successCartItemsList(list)
                    }
                }
            }
            .addOnFailureListener { e ->
                when (activity) {
                    is CartListActivity -> {
                        activity.hideProgressDialog()
                    }

                    is CheckoutActivity -> {
                        activity.hideProgressDialog()
                    }
                }
            }
    }

    fun removeItemFromCart(context: Context, cart_id: String) {
        fireStore.collection(Constants.CART_ITEMS)
            .document(cart_id) // cart id
            .delete()
            .addOnSuccessListener {
                when (context) {
                    is CartListActivity -> {
                        context.itemRemovedSuccess()
                    }
                }
            }
            .addOnFailureListener { e ->
                when (context) {
                    is CartListActivity -> {
                        context.hideProgressDialog()
                    }
                }
            }
    }

    fun updateMyCart(context: Context, cart_id: String, itemHashMap: HashMap<String, Any>) {
        fireStore.collection(Constants.CART_ITEMS)
            .document(cart_id) // cart id
            .update(itemHashMap) // A HashMap of fields which are to be updated.
            .addOnSuccessListener {
                when (context) {
                    is CartListActivity -> {
                        context.itemUpdateSuccess()
                    }
                }
            }
            .addOnFailureListener { e ->
                when (context) {
                    is CartListActivity -> {
                        context.hideProgressDialog()
                    }
                }
            }
    }

    fun addAddress(activity: AddEditAddressActivity, addressInfo: Address) {
        fireStore.collection(Constants.ADDRESSES)
            .document()
            .set(addressInfo, SetOptions.merge())
            .addOnSuccessListener {
                activity.addUpdateAddressSuccess()
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun getAddressesList(activity: AddressListActivity) {
        fireStore.collection(Constants.ADDRESSES)
            .whereEqualTo(Constants.USER_ID, getCurrentUserID())
            .get()
            .addOnSuccessListener { document ->
                val addressList: ArrayList<Address> = ArrayList()

                for (i in document.documents) {
                    val address = i.toObject(Address::class.java)!!
                    address.id = i.id
                    addressList.add(address)
                }
                activity.successAddressListFromFirestore(addressList)
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun updateAddress(activity: AddEditAddressActivity, addressInfo: Address, addressId: String) {
        fireStore.collection(Constants.ADDRESSES)
            .document(addressId)
            .set(addressInfo, SetOptions.merge())
            .addOnSuccessListener {
                activity.addUpdateAddressSuccess()
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun deleteAddress(activity: AddressListActivity, addressId: String) {
        fireStore.collection(Constants.ADDRESSES)
            .document(addressId)
            .delete()
            .addOnSuccessListener {
                activity.deleteAddressSuccess()
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun placeOrder(activity: CheckoutActivity, order: Order) {
        fireStore.collection(Constants.ORDERS)
            .document()
            .set(order, SetOptions.merge())
            .addOnSuccessListener {
                activity.orderPlacedSuccess()
            }
            .addOnFailureListener { e ->
                activity.hideProgressDialog()
            }
    }

    fun updateAllDetails(activity: CheckoutActivity, cartList: ArrayList<Cart>, order: Order) {
        val writeBatch = fireStore.batch()
        for (cart in cartList) {

            val soldProduct = SoldProduct(
                FirestoreClass().getCurrentUserID(),
                cart.title,
                cart.price,
                cart.cart_quantity,
                cart.image,
                order.title,
                order.order_datetime,
                order.sub_total_amount,
                order.shipping_charge,
                order.total_amount,
                order.address
            )

            val documentReference = fireStore.collection(Constants.SOLD_PRODUCTS)
                .document()
            writeBatch.set(documentReference, soldProduct)
        }

        for (cart in cartList) {
            val productHashMap = HashMap<String, Any>()
            productHashMap[Constants.STOCK_QUANTITY] =
                (cart.stock_quantity.toInt() - cart.cart_quantity.toInt()).toString()

            val documentReference = fireStore.collection(Constants.PRODUCTS)
                .document(cart.product_id)
            writeBatch.update(documentReference, productHashMap)
        }

        for (cart in cartList) {
            val documentReference = fireStore.collection(Constants.CART_ITEMS)
                .document(cart.id)
            writeBatch.delete(documentReference)
        }

        writeBatch.commit().addOnSuccessListener {
            activity.allDetailsUpdatedSuccessfully()
        }.addOnFailureListener { e ->
            activity.hideProgressDialog()
        }
    }

    fun getMyOrdersList(fragment: OrdersFragment) {
        fireStore.collection(Constants.ORDERS)
            .whereEqualTo(Constants.USER_ID, getCurrentUserID())
            .get()
            .addOnSuccessListener { document ->
                val list: ArrayList<Order> = ArrayList()
                for (i in document.documents) {
                    val orderItem = i.toObject(Order::class.java)!!
                    orderItem.id = i.id
                    list.add(orderItem)
                }
                fragment.populateOrdersListInUI(list)
            }
            .addOnFailureListener { e ->
                fragment.hideProgressDialog()
            }
    }

    fun getSoldProductsList(fragment: SoldProductsFragment) {
        fireStore.collection(Constants.SOLD_PRODUCTS)
            .whereEqualTo(Constants.USER_ID, getCurrentUserID())
            .get()
            .addOnSuccessListener { document ->
                val list: ArrayList<SoldProduct> = ArrayList()
                for (i in document.documents) {
                    val soldProduct = i.toObject(SoldProduct::class.java)!!
                    soldProduct.id = i.id
                    list.add(soldProduct)
                }
                fragment.successSoldProductsList(list)
            }
            .addOnFailureListener { e ->
                fragment.hideProgressDialog()
            }
    }

    fun getCurrentUserID(): String {
        val currentUser = FirebaseAuth.getInstance().currentUser
        if (currentUser != null) {
            return currentUser.uid;
        }
        return ""
    }
}
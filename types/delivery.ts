export interface DeliveryI {
  success: boolean
  data: {
    delivery_request: {
      receiver: {
        name: string
        phone_number: string
      }
      _id: string
      pickup_location: {
        address: string
        type: string
        coordinates: [number, number]
        description: string
        _id: string
      }
      dropoff_location: {
        address: string
        type: "Point"
        coordinates: [number, number]
        description: string
        _id: string
      }
      image: string | null
      delivery_type: string
      notes: string
      enduser: {
        _id: string
        user: {
          _id: string
          firstname: string
          lastname: string
          email: string
          role: "EndUser"
          createdAt: string
          updatedAt: string
          __v: 1
          user_groups: []
          phone_number: string
          transaction_pin_set: boolean
          profile_picture: string
          fullname: string
          id: string
        }
        role: "EndUser"
        __v: 0
        profile_picture: string
        stats: {
          rating: number
          _id: string
        }
        auto_approve_delivery: boolean
      }
      rider: {
        _id: string
        user: {
          _id: string
          fullname: string
          email: string
          profile_picture: string
          id: string
        }
        stats: {
          completed_orders: number
          accepted_orders: number
          canceled_orders: number
          delivery_rate: string
          total_distance_covered: number
          total_earnings: number
          rating: number
          _id: string
          id: string
        }
        profile_picture: string
        id: string
      }
      delivery_package_category: {
        name: string
        size: "medium"
        weight_range_high: number
        weight_range_low: number
        examples: string[]
        parent_category: string | null
        is_parent_category: boolean
        sub_categories: string[]
        hidden: boolean
        _id: string
        id: string
      }
      payment_method: "wallet"
      status: string
      timestamp: {
        created: string
        _id: string
        accepted: string
        approved_for_pickup: string
        picked_up: string
        completed: string
        duration: string
        id: string
      }
      express_fee: number
      price: number
      estimated_distance: string
      estimated_duration: string
      paid: boolean
      rating: number
      review: string | null
      reference: string
      createdAt: string
      updatedAt: string
      __v: 0
      pickup_time: string
      order_number: number
      id: string
    }
  }
}

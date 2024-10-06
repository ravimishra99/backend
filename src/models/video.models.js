import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema(
    {
        videofile:{
            type:String,
            required:true    //cloudinary url
        },
        thumbnail:{
            type:String,
            required:true    //cloudinary url
        },
        title:{
            type:String,
            required:true   
        },
        description:{
          type:String,
          required:true
        },    
        duration:{
            type:Number,
            required:true
        },

        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            dafault:true
        },
        owner:{
            type:Schema.Types.ObejectId,
            ref:"User"
        }
  
},
{
    timestamps:true
})
videoSchema.plugin(moongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoSchema)
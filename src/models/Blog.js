export class Blog{
    constructor(data){
        this.title = data.title,
        this.body = data.body, 
        this.id = data.id,
        this.published = data.published,
        this.tags = data.tags, 
        this.creator = data.creator,
        this.createdAt = new Date(data.createdAt), 
        this.updatedAt = new Date(data.updatedAt),
        this.imageUrl = data.imgUrl
    }

    get FullDate(){
        return this.createdAt.toLocaleDateString('en-us', {month: "long", day : "2-digit", year: "numeric" } )
    }

    get LastUpdated(){
        return this.createdAt.toLocaleDateString('en-us', {month: "long", day : "2-digit", year: "numeric"})
    }
}

// Attributes of response data : body, createdAt, creator, id, imgUrl, published, (Boolean), tags [], title, updatedAt
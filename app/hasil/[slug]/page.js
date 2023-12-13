import Read from "./read";

const getBlogs = async (id) => {
  // console.log("id",id)
  
    try {
      const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

export default async function Hasil({params}) {    
  const blog= await getBlogs(params.slug)
    return (
        <Read title={blog.blog.title} desc={blog.blog.description} key={params.slug}/>
    );
}
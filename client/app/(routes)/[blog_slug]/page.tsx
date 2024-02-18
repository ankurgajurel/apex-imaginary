export default function Blog({ params }: { params: { blog_slug: string } }) {
  return (
    <div>
      <div>{params.blog_slug}</div>
    </div>
  );
}

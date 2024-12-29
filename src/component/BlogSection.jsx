import React from 'react';
import cvr_4 from '/cvr-4---8-1.webp'
import cvr_3 from '/cvr-3.webp'
import file from '/file-upload-form.webp'


const BlogCard = ({ image, title, description }) => (
    <div className="bg-white cursor-pointer border border-gray-100 rounded-xl overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full p-2 h-full object-cover"
            />
        </div>
        <div className="p-6">
            <h3 className="text-lg leading-relaxed font-semibold text-navy-900 mb-3">
                {title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
                {description}
            </p>
        </div>
    </div>
);

const BlogSection = () => {
    const blogPosts = [
        {
            image: cvr_3,
            title: "How to create a contact form with Formcarry",
            description: "Contact forms are one of the best ways to convert more leads, and get the information you need..."
        },
        {
            image: file,
            title: "How to create a file upload form with formcarry in 5 steps",
            description: "One of the most time consuming thing about forms is definitely uploading files, sometimes..."
        },
        {
            image: cvr_4,
            title: "How to upload files from your HTML form using Base64 encoding",
            description: "Uploading files using Base64 encoding is a common practice, the usage of the technique has..."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
        <span className="text-blue-600 font-medium mb-3 block">
          FORMCARRY BLOG
        </span>
                <h2 className="md:text-5xl text-4xl font-medium text-navy-900">
                    Useful to read
                </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {blogPosts.map((post, index) => (
                    <BlogCard
                        key={index}
                        {...post}
                    />
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
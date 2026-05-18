import { useState } from "react";
export function AddMovieModal({ addMovie }) {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addMovie({
            ...form,
            rating: Number(form.rating),
        });

        setForm({
            title: "",
            description: "",
            posterURL: "",
            rating: "",
        });

        setOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold"
            >
                + Add Movie
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">Add Movie</h2>

                            <button
                                onClick={() => setOpen(false)}
                                className="text-red-400 text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="title"
                                placeholder="Movie Title"
                                value={form.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 outline-none"
                                required
                            />

                            <textarea
                                name="description"
                                placeholder="Movie Description"
                                value={form.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 outline-none"
                            />

                            <input
                                type="text"
                                name="posterURL"
                                placeholder="Poster URL"
                                value={form.posterURL}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 outline-none"
                                required
                            />

                            <input
                                type="number"
                                min="1"
                                max="5"
                                name="rating"
                                placeholder="Rating"
                                value={form.rating}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 outline-none"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold"
                            >
                                Save Movie
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

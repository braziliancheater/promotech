import React, { useState } from 'react';

function Cadastrar() {
    const [produto, setProduto] = useState({
        titulo: '',
        descricao: '',
        valor: '',
        site: '',
        fotos: [] as File[],
        fotosBase64: [] as string[]
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduto((prevProduto) => ({
                    ...prevProduto,
                    fotosBase64: [reader.result as string],
                    fotos: files,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!produto.titulo || !produto.descricao || !produto.valor || !produto.site || produto.fotosBase64.length === 0) {
            alert('Todos os campos são obrigatórios!');
            return;
        }

        const data = {
            titulo: produto.titulo,
            descricao: produto.descricao,
            valor: produto.valor,
            site: produto.site,
            fotos: produto.fotosBase64[0],
        };

        try {
            const response = await fetch('http://localhost:5000/produtos/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Produto cadastrado com sucesso!');
                setProduto({
                    titulo: '',
                    descricao: '',
                    valor: '',
                    site: '',
                    fotos: [],
                    fotosBase64: [],
                });
            } else {
                alert(`Erro: ${result.error || 'Erro desconhecido'}`);
            }
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            alert('Ocorreu um erro ao cadastrar o produto.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="card mx-auto w-full max-w-2xl p-6 shadow-lg border border-gray-200 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Cadastrar Produto</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="titulo" className="block text-lg font-medium mb-2">Título do Produto</label>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={produto.titulo}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricao" className="block text-lg font-medium mb-2">Descrição</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            value={produto.descricao}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="valor" className="block text-lg font-medium mb-2">Valor</label>
                        <input
                            type="number"
                            id="valor"
                            name="valor"
                            value={produto.valor}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="site" className="block text-lg font-medium mb-2">Link da Promoção</label>
                        <input
                            type="url"
                            id="site"
                            name="site"
                            value={produto.site}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fotos" className="block text-lg font-medium mb-2">Fotos do Produto</label>
                        <input
                            type="file"
                            id="fotos"
                            name="fotos"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm"
                        />
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastrar;

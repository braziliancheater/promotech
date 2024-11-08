import React, { useState } from 'react';

function Cadastrar() {
    const [produto, setProduto] = useState({
        titulo: '',
        descricao: '',
        valor: '',
        fotos: [] as File[]  // Definindo explicitamente o tipo de fotos como File[]
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);  // Tratando `null` caso o `files` seja nulo
        setProduto({ ...produto, fotos: files });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar os dados para o backend ou realizar outras ações
        console.log(produto);
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
                        <label htmlFor="fotos" className="block text-lg font-medium mb-2">Fotos do Produto</label>
                        <input
                            type="file"
                            id="fotos"
                            name="fotos"
                            multiple
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Cadastrar</button>
                </form>

                {produto.fotos.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Fotos Selecionadas</h3>
                        <div className="flex flex-wrap mt-2">
                            {produto.fotos.map((foto, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(foto)}
                                    alt={`Foto ${index + 1}`}
                                    className="w-24 h-24 object-cover m-2 rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cadastrar;

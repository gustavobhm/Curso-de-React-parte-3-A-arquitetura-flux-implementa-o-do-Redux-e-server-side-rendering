export function like(fotoId, liker) {
    return { type: 'LIKE', fotoId, liker };
}

export function comentario(fotoId, novoComentario) {
    return { type: 'COMENTARIO', fotoId, novoComentario }
}

export function listagem(fotos) {
    return { type: 'LISTAGEM', fotos };
}

export function notifica(msg) {
    return { type: 'ALERT', msg };
}
module.exports = {
    errorHandler: (err, req, res, next) => {
        // Penyesuaian kecil: error dari MySQL dipetakan ke status HTTP yang sesuai
        if (err.code === 'ER_DUP_ENTRY') {
            err.statusCode = 409;
            err.status = 'fail';
            err.message = 'Data duplikat: nilai unik (misalnya email) sudah terdaftar';
        } else if (err.code === 'ER_NO_REFERENCED_ROW_2') {
            err.statusCode = 400;
            err.status = 'fail';
            err.message = 'author_id tidak valid: penulis dengan ID tersebut tidak ditemukan';
        }

        err.statusCode = err.statusCode || 500;
        err.status = err.status || 'error';

        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }
};

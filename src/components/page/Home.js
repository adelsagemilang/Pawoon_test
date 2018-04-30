import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="breadcumbs">
					<span className="text-blue">Manajemen Produk</span>
					<span className="fa fa-chevron-right"></span>
					<span className="text-blue">Tambah Produk</span>
				</div>
				<div className="content">
					<div className="page-title">
						<h3>
							Tambah Prdouk
						</h3>
					</div>

					<div className="top-section">
						<div className="col-md-3">
							<div className="form-produk">
								<div className="upload-wrapper text-center text-blue">
									<p><i className="fa fa-cloud-upload fa-2x"></i></p>
									<p>Upload Foto</p>
								</div>
							</div>
							<p className="text-center text-small text-hint">(Maksimal 1 Mb)</p>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Nama Produk <span className="text-danger">*</span></label>
								<input type="text" className="form-control"/>
							</div>
							<div className="form-group">
								<label>Kategori <span className="text-danger">*</span></label>
								<div className="select-wrapper">
									<select name="" id="" className="form-control">
										<option value=""></option>
									</select>
								</div>
							</div>
							<div className="form-group">
								<label>Harga Jual <span className="text-danger">*</span></label>
								<input type="text" className="form-control"/>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>

					<div className="bottom-section">
						<div className="panel grey-panel">
							<div className="toggle-panel">
								<i className="fa fa-chevron-down"></i>
								<span>Pengaturan Produk (Opsional)</span>
							</div>
							<div className="panel-body">
								<div className="form-group">
									<label>Produk Ini Dijual</label>
									<div className="row-flex">
										<div className="mg-r-10">
											<input id="radioYa" type="radio" className="mg-r-10"/>
											<label htmlFor="radioYa">Ya</label>
										</div>
										<div>
											<input id="radioNo" type="radio" className="mg-r-10"/>
											<label htmlFor="radioNo">Tidak</label>
										</div>
									</div>
								</div>
								<div className="form-group">
									<label>SKU <span className="text-blue">(Apa ini?)</span></label>
									<input type="text" className="form-control"/>
								</div>
								<div className="form-group">
									<label>Barcode</label>
									<input type="text" className="form-control"/>
								</div>
								<div className="form-group">
									<label>Harga Beli</label>
									<input type="text" className="form-control"/>
								</div>
								<div className="form-group">
									<label>Pajak <span className="text-danger">*</span></label>
									<div className="select-wrapper">
										<select name="" id="" className="form-control">
											<option value=""></option>
										</select>
									</div>
								</div>
								<div className="form-group">
									<label>Deskripsi Produk</label>
									<textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
								</div>

								<div className="panel">
									<div className="form-group">
										<label>Varian Produk</label>
										<p className="text-muted">Apakah produk ini memiliki varian seperti warna dan ukuran?</p>
										<button className="btn btn-rounded btn-outline-blue">Varian Produk</button>
									</div>
									<div className="form-group mg-t-20">
										<label>Opsi Tambahan</label>
										<p className="text-muted">Apakah produk ini memiliki opsi tambahan yang dapat dipesan?</p>
									</div>
									<div className="form-group mg-t-20">
										<label>Bahan Baku</label>
										<p className="text-muted">Apakah anda ingin mengelola bahan baku produk ini?</p>
										<button className="btn btn-rounded btn-outline-blue">Bahan Baku</button>
									</div>
									<div className="form-group mg-t-20">
										<label>Stok</label>
										<p className="text-muted">Apakah anda ingin mengelola stok prduk ini?</p>
										<button className="btn btn-rounded btn-outline-blue">Stok</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

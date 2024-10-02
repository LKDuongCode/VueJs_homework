<script setup lang="ts"></script>

<template>
  <div class="w-[80%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <header class="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button class="btn btn-primary">Thêm mới nhân viên</button>
      </header>
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          style="width: 350px"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo email"
        />
        <i class="fa-solid fa-arrows-rotate" title="Refresh"></i>
      </div>
      <!-- Danh sách nhân viên -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colspan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>28/02/1990</td>
            <td>nvana@gmail.com</td>
            <td>Ba Đình, Hà Nội</td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px">
                <div class="status status-active"></div>
                <span> Đang hoạt động</span>
              </div>
            </td>
            <td>
              <span class="button button-block">Chặn</span>
            </td>
            <td>
              <span class="button button-edit">Sửa</span>
            </td>
            <td><span class="button button-delete">Xóa</span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>15/07/1985</td>
            <td>ttb@gmail.com</td>
            <td>Cầu Giấy, Hà Nội</td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px">
                <div class="status status-stop"></div>
                <span> Ngừng hoạt động</span>
              </div>
            </td>
            <td>
              <span class="button button-block">Bỏ chặn</span>
            </td>
            <td>
              <span class="button button-edit">Sửa</span>
            </td>
            <td><span class="button button-delete">Xóa</span></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lê Văn C</td>
            <td>03/10/2000</td>
            <td>lvc@gmail.com</td>
            <td>Hai Bà Trưng, Hà Nội</td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px">
                <div class="status status-stop"></div>
                <span> Ngừng hoạt động</span>
              </div>
            </td>
            <td>
              <span class="button button-block">Bỏ chặn</span>
            </td>
            <td>
              <span class="button button-edit">Sửa</span>
            </td>
            <td><span class="button button-delete">Xóa</span></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Phạm Thị D</td>
            <td>20/05/1995</td>
            <td>ptd@gmail.com</td>
            <td>Hoàn Kiếm, Hà Nội</td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px">
                <div class="status status-active"></div>
                <span> Đang hoạt động</span>
              </div>
            </td>
            <td>
              <span class="button button-block">Chặn</span>
            </td>
            <td>
              <span class="button button-edit">Sửa</span>
            </td>
            <td><span class="button button-delete">Xóa</span></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ngô Văn E</td>
            <td>12/11/1988</td>
            <td>nve@gmail.com</td>
            <td>Cầu Giấy, Hà Nội</td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px">
                <div class="status status-active"></div>
                <span> Đang hoạt động</span>
              </div>
            </td>
            <td>
              <span class="button button-block">Chặn</span>
            </td>
            <td>
              <span class="button button-edit">Sửa</span>
            </td>
            <td><span class="button button-delete">Xóa</span></td>
          </tr>
        </tbody>
      </table>
      <footer class="d-flex justify-content-end align-items-center gap-3">
        <select class="form-select">
          <option selected>Hiển thị 10 bản ghi trên trang</option>
          <option>Hiển thị 20 bản ghi trên trang</option>
          <option>Hiển thị 50 bản ghi trên trang</option>
          <option>Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </footer>
    </main>
  </div>

  <!-- Form thêm mới nhân viên -->
  <div class="overlay" h>
    <form class="form">
      <div class="d-flex justify-content-between align-items-center">
        <h4>Chỉnh sửa nhân viên</h4>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div>
        <label class="form-label" for="userName">Họ và tên</label>
        <input id="userName" type="email" class="form-control" />
        <!-- <div class="form-text error">Họ và tên không được để trống.</div> -->
      </div>
      <div>
        <label class="form-label" for="dateOfBirth">Ngày sinh</label>
        <input id="dateOfBirth" type="date" class="form-control" />
      </div>
      <!-- <div class="form-text error">
          Ngày sinh không được lớn hơn ngày hiện tại.
        </div> -->
      <div>
        <label class="form-label" for="email">Email</label>
        <input id="email" type="text" class="form-control" />
      </div>
      <!-- <div class="form-text error">Email không được để trống.</div> -->
      <div>
        <label class="form-label" for="address">Địa chỉ</label>
        <textarea class="form-control" id="address" rows="3"></textarea>
      </div>
      <div>
        <button class="w-100 btn btn-primary">Thêm mới</button>
      </div>
    </form>
  </div>

  <!-- Modal xác nhận chặn tài khoản -->
  <div class="overlay" hidden>
    <div class="modal-custom">
      <div class="modal-title">
        <h4>Cảnh báo</h4>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="modal-body-custom">
        <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
      </div>
      <div class="modal-footer-custom">
        <button class="btn btn-light">Hủy</button>
        <button class="btn btn-danger">Xác nhận</button>
      </div>
    </div>
  </div>

  <!-- Modal xác nhận xóa tài khoản -->
  <div class="overlay" hidden>
    <div class="modal-custom">
      <div class="modal-title">
        <h4>Cảnh báo</h4>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="modal-body-custom">
        <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
      </div>
      <div class="modal-footer-custom">
        <button class="btn btn-light">Hủy</button>
        <button class="btn btn-danger">Xác nhận</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

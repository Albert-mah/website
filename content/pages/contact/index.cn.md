<!-- Start Contact -->
        <section class="section">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-5 mb-4 pb-4">
                        <div class="d-flex contact-detail align-items-center mb-5">
                            <div class="flex-1 content">
                                <h5 class="title fw-bold mb-1">通过邮箱联系</h5>
                                <a href="mailto:hello@nocobase.com" class="text-primary">hello@nocobase.com</a>
                            </div>
                        </div>
                        <div class="d-flex contact-detail align-items-center mb-5">
                            <div class="flex-1 content">
                                <h5 class="title fw-bold mb-1">通过微信联系</h5>
                                <p>微信只提供商业版本和商业服务咨询，不提供开源版本技术支持。请在社区交流使用问题：<a href="https://forum.nocobase.com/" target="_blank">https://forum.nocobase.com/</a></p>
                                <img width="100" height="100" src="https://nocobase-file.oss-cn-beijing.aliyuncs.com/wechat.png">
                            </div>
                        </div>
                        <h5>我们在哪里</h5>
                        <div class="p-4 bg-light rounded shadow mb-4">
                            <ul class="list-unstyled text-muted mb-0">
                                <li><i data-feather="arrow-right" class="text-primary fea icon-sm me-2"></i>中国：北京市海淀区北三环中路44号</li>
                                <li><i data-feather="arrow-right" class="text-primary fea icon-sm me-2"></i>新加坡：#03-01, 112 Robinson Road, Singapore</li>
                                <li><i data-feather="arrow-right" class="text-primary fea icon-sm me-2"></i>日本：東京都北区赤羽1-55-8 501</li>
                            </ul>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-6">
                        <div class="card shadow border-0 rounded p-4">
                            <p class="text-muted para-desc fst-italic">联系表单正在制作中，请先通过邮箱或微信联系我们。</p>
                            <form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
                                <p id="error-msg" class="mb-0"></p>
                                <div id="simple-msg"></div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Your Name <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <input name="name" id="name" type="text" class="form-control" placeholder="" disabled>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Your Email <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <input name="email" id="email" type="email" class="form-control" placeholder="" disabled>
                                            </div>
                                        </div> 
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Company name</label>
                                            <div class="position-relative">
                                                <input name="subject" id="subject" class="form-control" placeholder="" disabled>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">User scale <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <select name="user-scale" id="user-scale" class="form-control" disabled>
                                                    <!-- <option value="50">Small Business - Fewer than 50 Users</option> -->
                                                </select>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Your job title <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <select name="job-title" id="job-title" class="form-control" disabled>
                                                    <!-- <option value="volvo">Volvo</option> -->
                                                </select>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Reason for contacting us <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                                <select name="reason" id="reason" class="form-control" disabled>
                                                    <!-- <option value="50">Small Business - Fewer than 50 Users</option> -->
                                                </select>
                                            </div>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Any other information</label>
                                            <div class="form-icon position-relative">
                                                <textarea name="comments" id="comments" rows="4" class="form-control" disabled></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="submit" id="submit" name="send" class="btn btn-primary" disabled>Submit</button>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </form>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Contact -->
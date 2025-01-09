@extends('layouts.vertical', ['page_title' => 'Add & Edit Products'])

@section('css')
    @vite(['node_modules/select2/dist/css/select2.min.css', 'node_modules/quill/dist/quill.core.css', 'node_modules/quill/dist/quill.snow.css', 'node_modules/dropzone/dist/min/dropzone.min.css'])
@endsection

@section('content')
    <style>
        .canvas-container {
            position: relative;
            width: 100%;
            max-width: 400px;
            /* 最大寬度 */
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #dee2e6;
        }

        .canvas-wrapper {
            position: relative;

        }

        canvas {
            display: block;
            width: 100%;
            /* 適應父容器寬度 */
            height: auto;
            /* 高度按比例縮放 */
        }

        .btn-group {
            margin-top: 10px;
            display: flex;
            gap: 10px;
        }

        #lineParams {
            display: none;
        }
    </style>
    </style>
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">eCommerce</a></li>
                            <li class="breadcrumb-item active">Product Edit</li>
                        </ol>
                    </div>
                    <h4 class="page-title">新增訂單</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <form action="{{ route('mapping.store') }}" method="POST">
            @csrf
            <!-- 訂單基本資料 -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">訂單基本資料</h5>

                            <div class="mb-3">
                                <label for="orderType" class="form-label">訂購單類別</label>
                                <input type="text" id="orderType" class="form-control" name="order_type"
                                    value="懸吊式推拉門訂購單">
                            </div>

                            <div class="mb-3">
                                <label for="orderNumber" class="form-label">訂單編號</label>
                                <input type="text" id="orderNumber" class="form-control" name="order_number"
                                    value="07-0530">
                            </div>

                            <div class="mb-3">
                                <label for="customer_name" class="form-label">客戶名稱</label>
                                <input type="text" id="customer_name" class="form-control" name="customer_name"
                                    value="雅丞 (M6-518)">
                            </div>

                            <div class="mb-3">
                                <label for="orderDate" class="form-label">訂單日期</label>
                                <input type="text" id="orderDate" class="form-control" name="order_date"
                                    value="2024/06/24">
                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label">電話</label>
                                <input type="text" id="phone" class="form-control" name="phone" value="07-3471234">
                            </div>

                            <div class="mb-3">
                                <label for="fax" class="form-label">傳真</label>
                                <input type="text" id="fax" class="form-control" name="fax" value="07-2341344">
                            </div>

                            <div class="mb-3">
                                <label for="contactPerson" class="form-label">聯絡人</label>
                                <input type="text" id="contactPerson" class="form-control" name="contact_person"
                                    value="黃小姐">
                            </div>

                            <div class="mb-3">
                                <label for="contactPhone" class="form-label">聯絡電話</label>
                                <input type="text" id="contactPhone" class="form-control" name="contact_phone"
                                    value="0999423444">
                            </div>

                            <div class="mb-3">
                                <label for="deliveryDate" class="form-label">交貨日期</label>
                                <input type="text" id="deliveryDate" class="form-control" name="delivery_date"
                                    value="2024/11/03">
                            </div>

                            <div class="mb-3">
                                <label for="deliveryAddress" class="form-label">送貨地址</label>
                                <input type="text" id="deliveryAddress" class="form-control" name="delivery_address"
                                    value="高雄市仁武區河南路188號">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 品項資訊 -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">品項資訊</h5>
                            <div class="mb-3">
                                <label for="lowerRail" class="form-label">樣式/系列</label>
                                <select id="lowerRail" class="form-control" name="style">
                                    <option value="緩衝式">緩衝式</option>
                                    <option value="快拆式">快拆式</option>
                                    <option value="連動式">連動式</option>
                                    <option value="拆門">拆門</option>
                                    <option value="其他">其他</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="upperRail" class="form-label">上橫料</label>
                                <input type="text" id="upperRail" class="form-control" name="upper_rail"
                                    value="懸吊上橫料">
                            </div>

                            <div class="mb-3">
                                <label for="lowerRail" class="form-label">下橫料</label>
                                <select id="lowerRail" class="form-control" name="lower_rail">
                                    <option value="懸吊下橫料">懸吊下橫料</option>
                                    <option value="落地下橫料">落地下橫料</option>
                                    <option value="折門下橫料">折門下橫料</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="columnType" class="form-label">立柱框型</label>
                                <select id="columnType" class="form-control" name="column_type">
                                    <option value="X型">X型</option>
                                    <option value="HA型">HA型</option>
                                    <option value="Z型">Z型</option>
                                    <option value="A型">A型</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="frameColor" class="form-label">鋁框顏色</label>
                                <select id="frameColor" class="form-control" name="frame_color">
                                    <option value="黑色">黑色</option>
                                    <option value="白色">白色</option>
                                    <option value="咖色">咖色</option>
                                    <option value="鋁色">鋁色</option>
                                    <option value="其他">其他(請填寫)</option>
                                </select>
                                <input type="text" id="frameColorOther" class="form-control mt-2"
                                    name="frame_color_other" placeholder="請填寫其他顏色">
                            </div>

                            <div class="mb-3">
                                <label for="hardware" class="form-label">選配五金</label>
                                <select id="hardware" class="form-control" name="hardware">
                                    <option value="崁拉手">崁拉手</option>
                                    <option value="A516崁把手">A516崁把手(單面/雙面)</option>
                                    <option value="崁入式勾鎖">崁入式勾鎖(有KEY/無KEY)</option>
                                    <option value="簡易式勾鎖">簡易式勾鎖(有KEY/無KEY)</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="glassType" class="form-label">玻璃需求</label>
                                <textarea id="glassType" class="form-control" rows="3" placeholder="請填寫廠商名稱與各種類玻璃的到貨日期" name="glass_type"></textarea>
                            </div>

                            <div class="mb-3">
                                <label for="materialType" class="form-label">板材需求</label>
                                <textarea id="materialType" class="form-control" rows="3" placeholder="請填寫廠商名稱與各種類板材的到貨日期"
                                    name="material_type"></textarea>
                            </div>

                            <div class="mb-3">
                                <label for="divider" class="form-label">區隔條</label>
                                <select id="divider" class="form-control" name="divider">
                                    <option value="10mm">10mm</option>
                                    <option value="20mm">20mm</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="divider" class="form-label">五金</label>
                                <select id="divider" class="form-control" name="up">
                                    <option value="上軌">上軌</option>
                                    <option value="上輪">上輪(一般輪)</option>
                                    <option value="上輪">上輪(緩衝輪)</option>
                                    <option value="上輪">上輪(快拆輪)</option>
                                    <option value="上輪">下輪(T型門只)</option>
                                    <option value="上輪">下輪(L型門只)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 製圖 -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">製圖</h5>

                            <div class="mb-3">
                                <label for="location" class="form-label">所在位置</label>
                                <input type="text" id="location" class="form-control" name="location"
                                    placeholder="請填寫所在位置">
                            </div>

                            <div class="mb-3">
                                <label for="actualWidth" class="form-label">實際寬度</label>
                                <input type="text" id="actualWidth" class="form-control" name="height"
                                    placeholder="請填寫寬度">
                            </div>

                            <div class="mb-3">
                                <label for="actualHeight" class="form-label">實際高度</label>
                                <input type="text" id="actualHeight" class="form-control" name="width"
                                    placeholder="請填寫高度">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">計價</h5>
                            <div class="mb-3">
                                <label for="areaCount" class="form-label">區數</label>
                                <input type="text" id="areaCount" class="form-control" name="area_count"
                                    placeholder="請填寫區數">
                            </div>

                            <div class="mb-3">
                                <label for="quantity" class="form-label">數量</label>
                                <input type="text" id="quantity" class="form-control" name="quantity"
                                    placeholder="請填寫數量">
                            </div>

                            <div class="mb-3">
                                <label for="unitPrice" class="form-label">單價</label>
                                <input type="text" id="unitPrice" class="form-control" name="unit_price"
                                    placeholder="請填寫單價">
                            </div>

                            <div class="mb-3">
                                <label for="installFee" class="form-label">安裝費</label>
                                <input type="text" id="installFee" class="form-control" name="install_fee"
                                    placeholder="請填寫安裝費">
                            </div>

                            <div class="mb-3">
                                <label for="total" class="form-label">總計</label>
                                <input type="text" id="total" class="form-control" name="total_price" readonly>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">桶身包內實際尺寸</h5>

                            <div class="row">
                                <!-- 設定畫布尺寸 -->
                                <div class="col-lg-6 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">設定畫布尺寸 (mm)</h5>
                                            <div class="mb-3">
                                                <label for="width" class="form-label">寬度 (mm)</label>
                                                <input type="number" id="width" class="form-control"
                                                    placeholder="請填寫寬度">
                                            </div>
                                            <div class="mb-3">
                                                <label for="height" class="form-label">高度 (mm)</label>
                                                <input type="number" id="height" class="form-control"
                                                    placeholder="請填寫高度">
                                            </div>
                                            <button type="button" class="btn btn-primary w-100"
                                                id="generateCanvas_step1">生成畫布</button>
                                        </div>
                                    </div>
                                </div>

                                <!-- 畫布顯示區塊 -->
                                <div class="col-lg-6">
                                    <div class="position-relative">
                                        <div class="canvas-container" id="canvasContainer1"></div>
                                        <!-- 寬度標註 -->
                                        <div id="widthLabel"
                                            style="position:absolute; top: -20px; left: 50%; transform: translateX(-50%);">
                                        </div>
                                        <!-- 高度標註 -->
                                        <div id="heightLabel"
                                            style="position:absolute; top: 50%; left: -40px; transform: translateY(-50%) rotate(-90deg);">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">門片完成尺寸</h5>

                            <div class="row">
                                <!-- 設定畫布尺寸 -->
                                <div class="col-lg-4 mb-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">設定畫布尺寸 (mm)</h5>
                                            <div class="mb-3">
                                                <label for="width_setp2" class="form-label">寬度 (mm)</label>
                                                <input type="number" id="width_setp2" class="form-control"
                                                    name="width_setp2" placeholder="請填寫寬度">
                                            </div>
                                            <div class="mb-3">
                                                <label for="height_setp2" class="form-label">高度 (mm)</label>
                                                <input type="number" id="height_setp2" class="form-control"
                                                    name="height_setp2" placeholder="請填寫高度">
                                            </div>
                                            <button type="button" class="btn btn-primary w-100"
                                                id="generateCanvas_step2">生成畫布</button>
                                        </div>
                                    </div>
                                </div>

                                <!-- 線條參數設置 -->
                                <div class="col-lg-4 mb-4" id="lineParams" style="display: none;">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title text-center">新增線條參數</h5>
                                            <div class="mb-3">
                                                <label for="startX" class="form-label">起始位置 (X軸, mm)</label>
                                                <input type="number" class="form-control" id="startX"
                                                    placeholder="輸入 X 軸起始位置">
                                            </div>
                                            <div class="mb-3">
                                                <label for="startY" class="form-label">起始位置 (Y軸, mm)</label>
                                                <input type="number" class="form-control" id="startY"
                                                    placeholder="輸入 Y 軸起始位置">
                                            </div>
                                            <div class="mb-3">
                                                <label for="startY" class="form-label">累加位置 (Y軸, mm)</label>
                                                <input type="number" class="form-control" id="accumulate"
                                                    placeholder="輸入累加起始位置">
                                            </div>
                                            <div class="mb-3">
                                                <label for="lineLength" class="form-label">線條長度 (mm)</label>
                                                <input type="number" class="form-control" id="lineLength"
                                                    placeholder="輸入線條長度">
                                            </div>
                                            <div class="mb-3">
                                                <label for="orientation" class="form-label">方向</label>
                                                <select class="form-select" id="orientation">
                                                    <option value="horizontal">橫向</option>
                                                    <option value="vertical">縱向</option>
                                                </select>
                                            </div>
                                            <button type="button" class="btn btn-success mb-2"
                                                id="addLineBtn">新增線條</button>
                                            <button type="button" class="btn btn-danger" id="undoBtn">返回上一步</button>
                                        </div>
                                    </div>
                                </div>

                                <!-- 畫布顯示區塊 -->
                                <div class="col-lg-4 mb-4">
                                    <h5 class="text-center">區塊 2：手動繪製線條</h5>
                                    <div class="canvas-container" id="canvasContainer2"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-6">
                    <!-- 左側：畫布顯示區塊 -->
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-center">區塊 3：同步區塊 2</h5>
                            <div class="canvas-wrapper" style="position: relative;">
                                <div class="canvas-container" id="canvasContainer3"></div>
                                {{-- <div class="canvas-container" id="canvasContainerText3"></div> --}}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <!-- 右側：設定畫布尺寸 -->
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">設定畫布尺寸 (mm)</h5>
                            <div id="lineList">
                                <!-- 線條列表將動態生成在這裡 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>



    </div>




    <input type="hidden" id="canvasImage1" name="image1">
    <input type="hidden" id="canvasImage2" name="image2">
    <input type="hidden" id="canvasImage3" name="image3">

    <div class="row">
        <div class="col-12">
            <div class="text-center mb-3">
                <button type="button" class="btn w-sm btn-light waves-effect">Cancel</button>
                <button type="submit" class="btn w-sm btn-success waves-effect waves-light"
                    onclick="prepareCanvasImages(event)">Save</button>
                <button type="button" class="btn w-sm btn-danger waves-effect waves-light">Delete</button>
            </div>
        </div> <!-- end col -->
    </div>
    <!-- end row -->


    <!-- file preview template -->

    </form>

    </div> <!-- container -->
@endsection


@section('script')
    {{-- <script>
        $(document).ready(function() {
            // 計算總計
            $('#calculateTotal').click(function() {
                var width = parseFloat($('#width').val()) || 0;
                var height = parseFloat($('#height').val()) || 0;
                var areaCount = parseFloat($('#areaCount').val()) || 0;
                var quantity = parseFloat($('#quantity').val()) || 0;
                var unitPrice = parseFloat($('#unitPrice').val()) || 0;
                var installFee = parseFloat($('#installFee').val()) || 0;

                // 假設計算公式：總計 = 寬度 * 高度 * 區數 * 單價 * 數量 + 安裝費
                var total = (width * height * areaCount * unitPrice * quantity) + installFee;
                $('#total').val(total.toFixed(2));
            });

            // 若選擇其他顏色時顯示輸入框
            $('#frameColor').change(function() {
                if ($(this).val() === '其他') {
                    $('#frameColorOther').show();
                } else {
                    $('#frameColorOther').hide().val('');
                }
            }).change(); // 初始化時檢查顏色選擇
        });
    </script> --}}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $('#actualHeight').on('input', function() {
            // 將 actualHeight 的值設定為 height 的值
            $('#height').val($(this).val());
            $('#height_setp2').val($(this).val());
        });
        $('#actualWidth').on('input', function() {
            // 將 actualWidth 的值設定為 height 的值
            $('#width').val($(this).val());
            $('#width_setp2').val($(this).val());
        });
        let mmToPx = 3.779528; // 假設 1 mm = 3.779528 px 的轉換比率
        let scaleFactor;
        const history = []; // 存儲線條繪製歷史
        let ctx1, ctx2, ctx3, ctxText3; // 2D 上下文

        // 點擊生成畫布的事件處理(Step 1)
        $('#generateCanvas_step1').click(function() {
            const widthMM = parseFloat($('#width').val());
            const heightMM = parseFloat($('#height').val());

            // 檢查寬高的合法性
            if (isNaN(widthMM) || isNaN(heightMM) || widthMM <= 0 || heightMM <= 0) {
                alert('請輸入有效的寬度和高度！');
                return;
            }

            const widthPx = widthMM * mmToPx; // 計算畫布寬度(px)
            const heightPx = heightMM * mmToPx; // 計算畫布高度(px)

            scaleFactor = 800 / heightPx; // 計算縮放比例
            const scaledWidth = widthPx * scaleFactor; // 根據縮放比例計算縮放後的寬度

            // 清空舊畫布
            $('#canvasContainer1').empty();

            // 建立新的畫布 (Step 1)
            ctx1 = createCanvas('canvasContainer1', 'canvas1', scaledWidth, 800);

            // 畫出實際寬高框 (區塊 1)
            drawCanvasFrame(ctx1, scaledWidth, 800);

            // 顯示畫布尺寸
            updateCanvasLabels(widthPx, heightPx);
        });

        // 點擊生成畫布的事件處理 (Step 2 - 控制 canvasContainer2 和 canvasContainer3)
        $('#generateCanvas_step2').click(function() {
            const widthMM = parseFloat($('#width_setp2').val());
            const heightMM = parseFloat($('#height_setp2').val());

            // 檢查寬高的合法性
            if (isNaN(widthMM) || isNaN(heightMM) || widthMM <= 0 || heightMM <= 0) {
                alert('請輸入有效的寬度和高度！');
                return;
            }

            const widthPx = widthMM * mmToPx;
            const heightPx = heightMM * mmToPx;

            scaleFactor = 800 / heightPx; // 計算縮放比例
            const scaledWidth = widthPx * scaleFactor;

            // 清空舊畫布
            $('#canvasContainer2, #canvasContainer3').empty();

            // 建立兩個畫布
            ctx2 = createCanvas('canvasContainer2', 'canvas2', scaledWidth, 800);
            ctx3 = createCanvas('canvasContainer3', 'canvas3', scaledWidth, 800);
            ctxText3 = createCanvas('canvasContainerText3', 'canvasText3', scaledWidth, 800);

            // 畫出實際寬高框
            drawCanvasFrame(ctx2, scaledWidth, 800);
            syncCanvases(); // 同步畫布

            // 顯示線條參數設置
            $('#lineParams').show();
        });

        // 建立畫布並返回 2D 上下文
        function createCanvas(containerId, canvasId, width, height) {
            const canvas = $('<canvas></canvas>')
                .attr('id', canvasId)
                .attr('width', width)
                .attr('height', height)
                .css('border', '1px solid black');

            $('#' + containerId).append(canvas);

            return canvas[0].getContext('2d');
        }

        // 畫出畫布的邊框
        function drawCanvasFrame(ctx, width, height) {
            ctx.beginPath();
            ctx.lineWidth = 5; // 設置邊框的寬度，您可以根據需要調整
            ctx.strokeStyle = 'black';
            ctx.rect(0, 0, width, height); // 繪製邊框矩形
            ctx.stroke();
        }


        let count = 0; // 用於追蹤是否是第一次繪製

        // 新增線條到 canvasContainer2
        $('#addLineBtn').click(function() {
            count++;
            let startX = parseFloat($('#startX').val());
            let startY = parseFloat($('#startY').val());
            const lineLength = parseFloat($('#lineLength').val());
            const orientation = $('#orientation').val();
            const accumulate = parseFloat($('#accumulate').val()); // 累加值

            if (isNaN(startX) || isNaN(startY) || isNaN(lineLength)) {
                alert('請輸入有效的線條參數！');
                return;
            }

            let endX = startX;
            let endY = startY;

            ctx2.beginPath();
            ctx2.strokeStyle = 'red';

            // 根據方向進行累加計算
            if (orientation === 'horizontal') {
                // 累加 Y 值
                if (count === 1) {
                    startY = startY + accumulate;
                } else {
                    startY = startY;
                }
                startY += isNaN(accumulate) ? 0 : accumulate;
                endX = startX + lineLength;

                ctx2.moveTo(startX * mmToPx * scaleFactor, startY * mmToPx * scaleFactor);
                ctx2.lineTo(endX * mmToPx * scaleFactor, startY * mmToPx * scaleFactor);
                ctx2.stroke();

                // 顯示「長」標註在水平線條的中間上方
                ctx2.font = "16px Arial";
                ctx2.fillStyle = "blue";
                ctx2.fillText(
                    `${lineLength} mm`,
                    (startX + lineLength / 2) * mmToPx * scaleFactor,
                    (startY - 10) * mmToPx * scaleFactor
                );

                // 顯示「高」標註在左側中間位置
                const heightDiff = startY; // 累加後的高度差
                ctx2.fillText(
                    `${heightDiff} mm`,
                    startX * mmToPx * scaleFactor,
                    (startY * mmToPx * scaleFactor) / 2
                );

                // 更新 input 中的 startY 值為累加後的結果
                $('#startY').val(startY);

            } else {
                // 縱向：累加值作為高度差
                endY = startY + accumulate; // 更新 endY 為 startY + accumulate
                endX = startX; // 縱向線條不變寬度

                ctx2.moveTo(startX * mmToPx * scaleFactor, startY * mmToPx * scaleFactor);
                ctx2.lineTo(startX * mmToPx * scaleFactor, endY * mmToPx * scaleFactor);
                ctx2.stroke();

                // 計算高度差並顯示在中間位置
                const heightDiff = endY - startY; // 計算 1425 - 300
                ctx2.font = "16px Arial";
                ctx2.fillStyle = "blue";
                ctx2.fillText(
                    `${heightDiff} mm`,
                    (startX - 50) * mmToPx * scaleFactor, // 偏移到左側
                    (startY + heightDiff / 2) * mmToPx * scaleFactor // 在中間位置顯示高度差
                );

                // 更新 input 中的 startX 值為累加後的結果
                $('#startY').val(endY);
            }

            // 保存繪製歷史
            let lineInfo = {
                startX,
                startY,
                endX,
                endY,
                lineLength,
                orientation
            };
            history.push(lineInfo);

            // 更新右側顯示列表
            updateLineList();

            // 同步線條到 canvas3，但不包括標註
            syncCanvases();

            // 在 canvastext3 上顯示更新的標註
            redrawCanvasText3();
        });

        // 更新右側線條列表
        // 更新線條列表
        function updateLineList() {
            $('#lineList').empty(); // 清空列表

            history.forEach((line, index) => {
                let lineHtml = `
            <div>
                <p>線條 ${index + 1}：</p>
                <p>起點: (X: ${line.startX}, Y: ${line.startY})</p>
                <p>終點: (X: ${line.endX}, Y: ${line.endY})</p>
        `;

                if (line.orientation === 'horizontal') {
                    // 顯示修改長度的輸入框
                    lineHtml += `
                <p>長度: <input type="number" value="${line.lineLength}" id="lineLength-${index}" data-index="${index}" class="line-length-input"/> mm</p>
            `;
                } else if (line.orientation === 'vertical') {
                    // 顯示修改高度的輸入框
                    lineHtml += `
                <p>高度: <input type="number" value="${Math.abs(line.endY - line.startY)}" id="lineHeight-${index}" data-index="${index}" class="line-height-input"/> mm</p>
            `;
                }

                // 加上方向和更新按鈕
                lineHtml += `
            <p>方向: ${line.orientation}</p>
            <button class="updateLineBtn" data-index="${index}">更新</button>
        </div>
        `;

                $('#lineList').append(lineHtml);
            });
        }

        // 當用戶更新線條長度或高度時，只更新 canvas3
        $(document).on('click', '.updateLineBtn', function(event) {
            event.preventDefault(); // 禁止表單提交
            let index = $(this).data('index');
            let newLength = parseFloat($(`#lineLength-${index}`).val());
            let newHeight = parseFloat($(`#lineHeight-${index}`).val());

            if (!isNaN(newLength) && newLength > 0) {
                history[index].lineLength = newLength;
            }
            if (!isNaN(newHeight) && newHeight > 0) {
                history[index].endY = history[index].startY + newHeight;
            }

            // 只更新 canvas3
            redrawCanvas3();
        });

        // 只針對 canvas3 重新繪製
        function redrawCanvas3() {
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height); // 清空 canvas3 的畫布
            history.forEach(line => {
                ctx3.beginPath();
                ctx3.strokeStyle = 'red';

                if (line.orientation === 'horizontal') {
                    let endX = line.startX + line.lineLength;
                    ctx3.moveTo(line.startX * mmToPx * scaleFactor, line.startY * mmToPx * scaleFactor);
                    ctx3.lineTo(endX * mmToPx * scaleFactor, line.startY * mmToPx * scaleFactor);
                    ctx3.stroke();

                    // 在水平線條旁邊標註長度
                    ctx3.font = "16px Arial";
                    ctx3.fillStyle = "blue";
                    ctx3.fillText(`${line.lineLength} mm`, (line.startX + line.lineLength / 2) * mmToPx *
                        scaleFactor, (line.startY - 10) * mmToPx * scaleFactor);
                } else {
                    let endY = line.startY + line.lineLength; // 更新 endY 使用 lineLength
                    ctx3.moveTo(line.startX * mmToPx * scaleFactor, line.startY * mmToPx * scaleFactor);
                    ctx3.lineTo(line.startX * mmToPx * scaleFactor, endY * mmToPx * scaleFactor);
                    ctx3.stroke();

                    // 在垂直線條旁邊標註高度
                    ctx3.font = "16px Arial";
                    ctx3.fillStyle = "blue";
                    ctx3.fillText(`${Math.abs(endY - line.startY)} mm`, (line.startX + 10) * mmToPx * scaleFactor, (
                        line.startY + (endY - line.startY) / 2) * mmToPx * scaleFactor);
                }
            });
        }


        function redrawCanvasText3() {
            const canvastext3 = document.getElementById('canvastext3');
            const ctxText3 = canvastext3.getContext('2d');

            // 清空 canvastext3 畫布
            ctxText3.clearRect(0, 0, canvastext3.width, canvastext3.height);

            // 遍歷 history，僅繪製長度標註
            history.forEach(line => {
                ctxText3.font = "16px Arial";
                ctxText3.fillStyle = "blue";

                if (line.orientation === 'horizontal') {
                    // 在水平線條旁邊顯示長度標註
                    ctxText3.fillText(
                        `${line.lineLength} mm`,
                        (line.startX + line.lineLength / 2) * mmToPx * scaleFactor,
                        (line.startY - 10) * mmToPx * scaleFactor
                    );
                } else {
                    // 在垂直線條旁邊顯示長度標註
                    ctxText3.fillText(
                        `${line.lineLength} mm`,
                        (line.startX + 10) * mmToPx * scaleFactor,
                        (line.startY + line.lineLength / 2) * mmToPx * scaleFactor
                    );
                }
            });
        }



        // 同步區塊 2 到區塊 3
        function syncCanvases() {
            const canvas2 = document.getElementById('canvas2');
            const canvas3 = document.getElementById('canvas3');
            const ctx3 = canvas3.getContext('2d');

            ctx3.clearRect(0, 0, canvas3.width, canvas3.height); // 清空 canvas3 畫布
            ctx3.drawImage(canvas2, 0, 0); // 將 canvas2 的內容（包括線條和標註）複製到 canvas3
        }



        $('#undoBtn').click(function() {
            if (history.length === 0) {
                alert("沒有可以返回的步驟");
                return;
            }

            // 移除最後一個繪製的線條
            history.pop();

            // 如果 history 清空了，清空畫布並清空列表
            if (history.length === 0) {
                clearCanvas(); // 清空 canvas2 和 canvas3
                updateLineList(); // 清空右側列表
                return;
            }

            // 重新繪製 canvas2 和 canvas3 並更新線條列表
            redrawCanvas2(); // 更新 canvas2
            redrawCanvas3(); // 更新 canvas3
            updateLineList(); // 更新右側的線條列表
        });

        // 清空畫布的函數
        function clearCanvas() {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // 清空 canvas2
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height); // 清空 canvas3
        }

        // 重新繪製 canvas2
        function redrawCanvas2() {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // 清空 canvas2 的畫布
            history.forEach(line => {
                ctx2.beginPath();
                ctx2.strokeStyle = 'red';

                if (line.orientation === 'horizontal') {
                    let endX = line.startX + line.lineLength;
                    ctx2.moveTo(line.startX * mmToPx * scaleFactor, line.startY * mmToPx * scaleFactor);
                    ctx2.lineTo(endX * mmToPx * scaleFactor, line.startY * mmToPx * scaleFactor);
                    ctx2.stroke();

                    // 在水平線條旁邊標註長度
                    ctx2.font = "16px Arial";
                    ctx2.fillStyle = "blue";
                    ctx2.fillText(`${line.lineLength} mm`, (line.startX + line.lineLength / 2) * mmToPx *
                        scaleFactor, (line.startY - 10) * mmToPx * scaleFactor);
                } else {
                    let endY = line.startY + (line.endY - line.startY); // 確保垂直方向更新
                    ctx2.moveTo(line.startX * mmToPx * scaleFactor, line.startY * mmToPx * scaleFactor);
                    ctx2.lineTo(line.startX * mmToPx * scaleFactor, endY * mmToPx * scaleFactor);
                    ctx2.stroke();

                    // 在垂直線條旁邊標註長度
                    ctx2.font = "16px Arial";
                    ctx2.fillStyle = "blue";
                    ctx2.fillText(`${Math.abs(endY - line.startY)} mm`, (line.startX + 10) * mmToPx * scaleFactor, (
                        line.startY + (endY - line.startY) / 2) * mmToPx * scaleFactor);
                }
            });
        }

        // 將 canvas1 的內容轉換為 Base64 圖片格式
        function prepareCanvasImages(event) {
            // 獲取三個 canvas 元素
            var canvas1 = document.getElementById('canvas1');
            var canvas2 = document.getElementById('canvas2');
            var canvas3 = document.getElementById('canvas3');

            // 確保三個 canvas 都存在
            if (canvas1 || canvas2 || canvas3) {
                // 將 canvas1 轉換為 Base64
                var image1 = canvas1.toDataURL('image/png');
                if (image1) {
                    document.getElementById('canvasImage1').value = image1; // 存入隱藏 input
                } else {
                    console.error("Failed to generate Base64 image data from canvas1.");
                }

                // 將 canvas2 轉換為 Base64
                var image2 = canvas2.toDataURL('image/png');
                if (image2) {
                    document.getElementById('canvasImage2').value = image2; // 存入隱藏 input
                } else {
                    console.error("Failed to generate Base64 image data from canvas2.");
                }

                // 將 canvas3 轉換為 Base64
                var image3 = canvas3.toDataURL('image/png');
                if (image3) {
                    document.getElementById('canvasImage3').value = image3; // 存入隱藏 input
                } else {
                    console.error("Failed to generate Base64 image data from canvas3.");
                }

                // 提交表單
                document.getElementById('canvasForm').submit();
            } else {
                console.error("One or more canvas elements not found.");
            }
        }
    </script>
    @vite(['resources/js/pages/add-product.init.js'])
@endsection

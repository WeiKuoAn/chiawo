<!-- ========== Left Sidebar Start ========== -->
<div class="app-menu">

    <div class="logo-box">
        <a href="#" class="logo-light">
            <img src="{{ Vite::asset('resources/images/logo-light.png') }}" alt="logo" class="logo-lg">
            <img src="{{ Vite::asset('resources/images/logo-sm.png') }}" alt="small logo" class="logo-sm">
        </a>
        <a href="#" class="logo-dark">
            <img src="{{ Vite::asset('resources/images/logo-dark.png') }}" alt="dark logo" class="logo-lg">
            <img src="{{ Vite::asset('resources/images/logo-sm.png') }}" alt="small logo" class="logo-sm">
        </a>
    </div>

    <div class="scrollbar h-100" data-simplebar>

        <!-- User box -->
        <div class="user-box text-center">
            <img src="{{ Vite::asset('resources/images/users/user-1.jpg') }}" alt="user-img" title="Mat Helme" class="rounded-circle avatar-md">
            <div class="dropdown">
                <a href="javascript: void(0);" class="dropdown-toggle h5 mb-1 d-block" data-bs-toggle="dropdown">Geneva
                    Kennedy</a>
                <div class="dropdown-menu user-pro-dropdown">

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-user me-1"></i>
                        <span>My Account</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-settings me-1"></i>
                        <span>Settings</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-lock me-1"></i>
                        <span>Lock Screen</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-log-out me-1"></i>
                        <span>Logout</span>
                    </a>

                </div>
            </div>
            <p class="text-muted mb-0">Admin Head</p>
        </div>

        <!--- Sidemenu -->

        <ul id="side-menu" class="menu">

            <li class="menu-title">Navigation</li>

            <li class="menu-item ">
                <a href="#sidebarDashboards" data-bs-toggle="collapse" class="menu-link">
                    <span class="menu-icon">
                        <i data-feather="airplay"></i>
                    </span>
                    <span class="menu-text"> Dashboards </span>
                    <span class="badge bg-success rounded-pill ms-auto">4</span>
                </a>
                <div class="collapse" id="sidebarDashboards">
                    <ul class="sub-menu">
                        <li class="menu-item ">
                            <a href="#" class="menu-link"><span class="menu-text">Dashboard 1</span></a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="menu-title">Apps</li>
            <li class="menu-item">
                <a href="#Mapping" data-bs-toggle="collapse" class="menu-link">
                    <span class="menu-icon"><i data-feather="shopping-cart"></i></span>
                    <span class="menu-text"> 訂單管理 </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="Mapping">
                    <ul class="sub-menu">
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('mapping.index') }}"><span class="menu-text">訂單總覽</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('mapping.create') }}"><span class="menu-text">新增訂單</span></a>
                        </li>
                    </ul>
                </div>
            </li>

            {{-- <li class="menu-item">
                <a href="#sidebarEcommerce" data-bs-toggle="collapse" class="menu-link">
                    <span class="menu-icon"><i data-feather="shopping-cart"></i></span>
                    <span class="menu-text"> Ecommerce </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarEcommerce">
                    <ul class="sub-menu">
                        <li class="menu-item">
                            <a class="menu-link" href=""><span class="menu-text">Dashboard</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href=""><span class="menu-text">Products</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href=""><span class="menu-text">Product Detail</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['ecommerce', 'product-edit']) }}"><span class="menu-text">Add Product</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['ecommerce', 'customers']) }}"><span class="menu-text">Customers</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['ecommerce', 'orders']) }}"><span class="menu-text">Orders</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['ecommerce', 'order-detail']) }}"><span class="menu-text">Order Detail</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['ecommerce', 'sellers']) }}"><span class="menu-text">Sellers</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['ecommerce', 'cart']) }}"><span class="menu-text">Shopping Cart</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['ecommerce', 'checkout']) }}"><span class="menu-text">Checkout</span></a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="menu-item">
                <a class="menu-link" href="#sidebarCrm" data-bs-toggle="collapse">
                    <span class="menu-icon"><i data-feather="users"></i></span>
                    <span class="menu-text"> CRM </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarCrm">
                    <ul class="sub-menu">
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['crm', 'dashboard']) }}"><span class="menu-text">Dashboard</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['crm', 'contacts']) }}"><span class="menu-text">Contacts</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['crm', 'opportunities']) }}"><span class="menu-text">Opportunities</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['crm', 'leads']) }}"><span class="menu-text">Leads</span></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="{{ route('second', ['crm', 'customers']) }}"><span class="menu-text">Customers</span></a>
                        </li>
                    </ul>
                </div>
            </li> --}}
        </ul>

        {{-- </div> --}}
        <!-- End Sidebar -->

        <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->

</div>
<!-- Left Sidebar End -->

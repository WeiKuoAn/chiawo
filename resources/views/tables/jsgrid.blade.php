@extends('layouts.vertical', ['page_title' => 'JsGrid Tables'])

@section('css')
    <link href="{{ Vite::asset('node_modules/jsgrid/dist/jsgrid.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ Vite::asset('node_modules/jsgrid/dist/jsgrid-theme.min.css') }}" rel="stylesheet" type="text/css" />

@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                            <li class="breadcrumb-item active">JsGrid</li>
                        </ol>
                    </div>
                    <h4 class="page-title">JsGrid Tables</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div id="jsGrid"></div>
                    </div>
                </div>
            </div>
        </div>

    </div> <!-- container -->
@endsection

@section('script')
    @vite(['resources/js/pages/jsgrid.init.js'])
@endsection
